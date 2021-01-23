var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');

const mongo = require('./database');
const mongoConnection = mongo();

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

require('./routes/patient')(app);
require('./routes/activity')(app);

mongoConnection.on('error', console.log).on('disconnected', mongo);

app.listen(config.PORT, () => {
  console.log(`Servidor rodando na porta ${config.PORT}`);
});

module.exports = app;
