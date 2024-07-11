const fs = require('fs');
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
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

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


