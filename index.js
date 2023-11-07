// Require the necessary modules
const express = require('express');

// Create an Express app
const app = express();
const PORT = 3000; // You can choose any available port you prefer

// Define some simple GET endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
