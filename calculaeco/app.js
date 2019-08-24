//router
const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index.js');
const calcRouter = require('./routes/calculadora.js');
const resultRouter = require('./routes/resultado.js');

//router config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "pug")
app.set('views', path.join(__dirname, 'views'))

app.use('/home', indexRouter);
app.use('/calculadora', calcRouter);
app.use('/resultado', resultRouter);

module.exports = app;
