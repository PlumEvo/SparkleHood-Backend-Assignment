const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

// Database path - use env var or default to local sqlite file
const dbFile = process.env.DB_PATH || path.join(__dirname, '../database.sqlite');

// Setup db connection
const db = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
  logging: false
});

module.exports = db; 