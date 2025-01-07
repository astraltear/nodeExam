const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end(" Hello World! Express is running");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});