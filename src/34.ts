const express = require('express');
const app = express();
app.use(express.json());

// Add your server-side logic here

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
