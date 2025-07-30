const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from NodeJS backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
