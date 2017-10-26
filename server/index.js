const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from my custom server!"}');
response.writeHead(200, { 'Content-Type': 'text/html' });  
response.write('<!DOCTYPE html><html lang="en"><head>');  
response.write('<meta charset="utf-8">');  
response.write('</head><body>');  
response.write('<h1>Vai Brasil</h1>');  
response.write('</body></html>');  
response.end();  
});


// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
