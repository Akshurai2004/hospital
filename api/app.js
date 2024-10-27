const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Example Route
app.get('/', (req, res) => {
  res.send('Hospital Management System API is running!');
});

module.exports = app; 
