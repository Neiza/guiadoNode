var express = require("express");
var path = require("path");
var app = express();

app.use('/static', express.static(path.join(__dirname, 'node_modules')));  // dirname trae la ruta del proyecto c/documents..guiadoNode y node_modules esa crpa
app.use('/static', express.static(path.join(__dirname, 'public/assets')));          // y express.static le da el ALIAS '/staic a toda la ruta'

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(8080);
