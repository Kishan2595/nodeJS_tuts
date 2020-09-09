const express = require("express");
const app = express();
// const uuid = require('uuid');

app.use(express.json())

// Database
const db = require('./config/database');

// Test db
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// const users = []  // store users use a db instead


// Users API Routes
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});