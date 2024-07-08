const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // This is the SQLite file path
});

// Define the RSVP model
const RSVP = sequelize.define('RSVP', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  guests: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Sync the database
sequelize.sync();

module.exports = { RSVP, sequelize };
