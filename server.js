const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// API Route to handle RSVP form submission
app.post('/submit-rsvp', (req, res) => {
  console.log('Received RSVP form submission:', req.body);
  const { name, phone, guests, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New RSVP Submission',
    html: formatRSVPDetailsToHTML({ name, phone, guests, message }),
  };

  console.log('Attempting to send email with options:', mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('RSVP sent successfully');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
