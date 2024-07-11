const fs = require('fs');
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Helper function to format RSVP details into HTML
const formatRSVPDetailsToHTML = (rsvpDetails) => {
  return `
    <h1>RSVP Submission</h1>
    <p><strong>Name:</strong> ${rsvpDetails.name}</p>
    <p><strong>Phone:</strong> ${rsvpDetails.phone}</p>
    <p><strong>Number of Guests:</strong> ${rsvpDetails.guests}</p>
    <p><strong>Message:</strong> ${rsvpDetails.message}</p>
  `;
};

// Path to the guests.json file
const guestsFilePath = path.join(__dirname, 'guests.json');

// Read guests count from the file
const readGuestsCount = () => {
  try {
    const data = fs.readFileSync(guestsFilePath, 'utf8');
    const guests = JSON.parse(data);
    return guests.count;
  } catch (error) {
    return 0;
  }
};

// Write guests count to the file
const writeGuestsCount = (count) => {
  const data = JSON.stringify({ count }, null, 2);
  fs.writeFileSync(guestsFilePath, data, 'utf8');
};

// Initialize guests.json if it doesn't exist
if (!fs.existsSync(guestsFilePath)) {
  writeGuestsCount(0);
}

// API Route to handle RSVP form submission
app.post('/submit-rsvp', (req, res) => {
  const { name, phone, guests, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New RSVP Submission',
    html: formatRSVPDetailsToHTML({ name, phone, guests, message }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send('Error sending email');
    } else {
      // Update the guests count
      let currentCount = readGuestsCount();
      currentCount += parseInt(guests, 10);
      writeGuestsCount(currentCount);

      res.status(200).send('RSVP sent successfully');
    }
  });
});

// Endpoint to get the current guests count
app.get('/guests-count', (req, res) => {
  const count = readGuestsCount();
  res.json({ count });
});

// New route to handle M-Pesa STK Push payment initiation
app.post('/mpesa/stkpush', async (req, res) => {
  const { phoneNumber, amount } = req.body;

  // Generate the access token
  const getToken = async () => {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      auth: {
        username: process.env.MPESA_CONSUMER_KEY,
        password: process.env.MPESA_CONSUMER_SECRET
      }
    });
    return response.data.access_token;
  };

  try {
    const token = await getToken();
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
    const password = Buffer.from(`${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`).toString('base64');

    const requestBody = {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phoneNumber,
      CallBackURL: `${process.env.BASE_URL}/mpesa/callback`,
      AccountReference: "WeddingPayment",
      TransactionDesc: "Payment for wedding"
    };

    const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', requestBody, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error initiating payment');
  }
});

// Callback URL to handle M-Pesa responses
app.post('/mpesa/callback', (req, res) => {
  const { Body: { stkCallback } } = req.body;
  const { MerchantRequestID, CheckoutRequestID, ResultCode, ResultDesc, CallbackMetadata } = stkCallback;

  // Process the callback data as needed
  if (ResultCode === 0) {
    // Payment was successful, you can store the transaction details in your database
    console.log('Payment successful:', CallbackMetadata);
  } else {
    // Payment failed, handle accordingly
    console.log('Payment failed:', ResultDesc);
  }

  res.status(200).send('Callback received');
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
