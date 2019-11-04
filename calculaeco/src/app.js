const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//app config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set("view engine", "pug")
app.set('views', 'views')

module.exports = app;
