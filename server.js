const express = require('express'),
  path = require('path'),
  app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

let port = 5001 || process.env.port;

app.listen(port, () => console.log(`Connected to port ${port}`));
