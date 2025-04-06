const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Add more routes as needed
