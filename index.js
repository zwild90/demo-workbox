const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/web/index.html'));
});

app.get('/:name', function(req, res) {
  console.log('getting file:', req.params.name);
  res.sendFile(path.join(__dirname, `/web/${req.params.name}`));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);