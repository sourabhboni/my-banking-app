// Importing the Express.js router to define routes
const express = require('express');
const router = express.Router();

// Dummy account balance data to simulate a real database
const accountBalance = {
  accountId: '12345',
  balance: 1000
};

// Defining a route to handle GET requests to the /balance endpoint
router.get('/balance', (req, res) => {
  // Responding with the dummy account balance data in JSON format
  res.json(accountBalance);
});

// Exporting the router to be used in other parts of the application
module.exports = router;
