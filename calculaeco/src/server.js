const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes');

//app config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set("view engine", "pug")
app.set('views', 'views')

app.use(routes);

require('dotenv').config();

//setando a porta e abrindo a conexão
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Running on port", port);
});
