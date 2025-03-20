const express = require('express')

// Next initialize the application
const app = express();

//routing path
app.get('/nodecicd', (req, res) => {
  res.send('node cicd status - Running!');
});

// Start the server
app.listen(3000, () => {
  console.log('node cicd - Server started on port 3000');
});