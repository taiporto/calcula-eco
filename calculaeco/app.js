//router
const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');


//router config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "pug")
app.set('views', path.join(__dirname, 'views'))

module.exports = app;
