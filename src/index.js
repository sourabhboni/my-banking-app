// Importing the Express.js library to create a web application
const express = require('express');

// Importing Helmet to secure the application by setting various HTTP headers
const helmet = require('helmet');

// Importing the account routes defined in the accountRoutes.js file
const accountRoutes = require('./routes/accountRoutes');

// Creating an instance of an Express application
const app = express();

// Defining the port on which the server will listen
const PORT = process.env.PORT || 3000;

// Using Helmet to secure HTTP headers
app.use(helmet());

// Registering the account routes with the main application
app.use('/api/accounts', accountRoutes);

// Setting up a basic route to respond with a welcome message when the root URL is accessed
app.get('/', (req, res) => {
  res.send('Welcome to the Core Banking Service!');
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging purposes
  res.status(500).json({ error: 'Something went wrong!' }); // Send a generic error response
});

// Starting the server and listening on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
