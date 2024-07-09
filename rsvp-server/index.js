const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const { RSVP } = require('./database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your Gmail address
    pass: process.env.PASSWORD, // Your Gmail password or App password if 2FA is enabled
  },
});

// API endpoint to handle form submissions
app.post('/rsvp', async (req, res) => {
  const { name, phone, guests, message } = req.body;

  try {
    // Save RSVP data to the database
    const rsvp = await RSVP.create({ name, phone, guests: parseInt(guests), message });

    // Send an email notification
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, // Send to your own email
      subject: 'New Guest',
      text: `Name: ${name}\nPhone: ${phone}\nGuests: ${guests}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('RSVP sent successfully');
    });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// API endpoint to get the total number of guests
app.get('/total-guests', async (req, res) => {
  try {
    const totalGuests = await RSVP.sum('guests');
    res.status(200).json({ totalGuests });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

// API endpoint to reset RSVPs
app.delete('/reset-rsvps', async (req, res) => {
  const { secret } = req.body;

  if (secret !== process.env.RESET_SECRET) {
    return res.status(403).send('Forbidden: Invalid secret key');
  }

  try {
    await RSVP.destroy({ where: {} }); // Deletes all entries in the RSVP table
    res.status(200).send('RSVPs have been reset');
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
