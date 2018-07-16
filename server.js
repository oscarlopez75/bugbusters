const express = require('express');
const path = require('path');
require('dotenv').config();
require('ssl-root-cas').inject();
var bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

const routes = require('./server/routes/routes'); //getting our routes

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist'))); //since index.html in dist is static
app.use('/routes', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html')); //send all requests to our page to dist
});


const PORT = process.env.PORT || 4700;

app.listen(PORT, (req, res) => {
  console.log('Running on port ' + PORT);
});
