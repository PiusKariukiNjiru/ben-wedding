const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post('/rsvp', async (req, res) => {
  const { name, phone, guests, message } = req.body;

  try {
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
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

app.get('/total-guests', async (req, res) => {
  try {
    const totalGuests = await RSVP.sum('guests');
    res.status(200).json({ totalGuests });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
