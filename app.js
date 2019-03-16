const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const textParser = bodyParser.json();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", textParser, (req, res) => {
  res.send(`hi ${req.body.text}`);
});

module.exports = app;
