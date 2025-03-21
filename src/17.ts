const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Welcome to SchoolExpress!</h1>
        <p>Feel free to share your projects with the world on this platform.</p>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
