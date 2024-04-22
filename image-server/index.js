const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.get('/:name', function(req, res) {
  console.log('getting file:', req.params.name);
  res.sendFile(path.join(__dirname, `/assets/images/jpeg-3.jpeg`));
  // res.sendFile(path.join(__dirname, `/assets/images/${req.params.name}`));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);