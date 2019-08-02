const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

express()
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(express.static(path.join(__dirname, 'public')))
    .set("view engine", "pug")
    .set('views', path.join(__dirname, 'views'))

// //definindo a porta local a ser utilizada
// const port = 1337;

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0-yfisq.gcp.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "bdcalculaeco";

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        throw error;
    }

    database = client.db(DATABASE_NAME);

    collection = database.collection("disciplinas");

    console.log("Connected to `" + DATABASE_NAME + "`!");
});

// //conectar ao port
// app.listen(port, () => {
//     console.log("Running on port", port);
// });

//carregar a página inicial
app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

//carrega a página de resultados
app.get('/resultado', function (req, res) {
    res.render('resultado.pug', {});
});


//Esse POST pesquisa quais cursos estão disponíveis em determinado período
app.get("/calculadora", (req, res) => {

    cursoSelected = req.body.cursos;

    let periodoSelected = req.body.periodos;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    req.is('text/*');

    //query MongoDB para achar as matérias disponíveis para aquele curso naquele período
    let queryCurso = {
        "curso": cursoSelected,
        "periodo": periodoSelected
    };

    collection.find(queryCurso).toArray((err, result) => {
        if (result.length > 0) {
            let jsonResult = JSON.parse(JSON.stringify(result));
            res.render("calculadora", { disciplinas: jsonResult, require: require });
        }
        else {
            res.send("<span>Por favor insira uma combinação válida</span>");
        }
    });

});

    //dicionário para transformar a sigla do curso no nome dele (Não sei se vai ser necessário)
    // let cursoDict = {
    //     "cs": "Ciclo Básico",
    //     "pp": "Publicidade e Propaganda",
    //     "rtv": "Rádio e TV",
    //     "pe": "Produção Editorial",
    //     "j": "Jornalismo"
    // }
    






