const express = require('express');
const app = express();
const PORT = 3000;

// The "Home" route
app.get('/', (req, res) => {
  res.send('Hello, World! Your Node app is officially alive.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});