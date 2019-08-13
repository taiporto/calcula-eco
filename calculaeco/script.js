//módulo que faz a conexão com o banco de dados
const connection = require('./connection.js');

//módulo que faz a conta do cr
const calculadora = require('./calculadora.js');

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

//port
const port = process.env.PORT || 3338;

app.listen(port, () => {
    console.log("Running on port", port);
});

app.get("/home", (req, res) => {
    res.render('index', { root: __dirname, titulo : "Home" });
})

//conectar ao banco de dados
connection.connect();

//array para guardar os creditos
creditosArray = [];

//Esse POST pesquisa quais cursos estão disponíveis em determinado período
app.post("/calculadora", (req, res) => {

    let cursoSelected = req.body.cursos;
    let periodoSelected = req.body.periodos;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    req.is('text/*');

    //query MongoDB para achar as matérias disponíveis para aquele curso naquele período
    let queryCurso = {
        "curso": cursoSelected,
        "periodo": periodoSelected
    };

    collection.find(queryCurso).toArray((err, result) => {
        if (!err) {
            if (result.length > 0) {
                let jsonResult = JSON.parse(JSON.stringify(result));
                creditosArray = jsonResult.map(function(item) {
                    return item.creditos;
                  });
                res.render("calculadora", { disciplinas: jsonResult, titulo : "Calculadora"});
            }
            else {
                res.send("<span>Por favor insira uma combinação válida</span>");
            }
        }
        else {
            throw (err);
        }
    });

});

//Esse POST faz o display dos resultados
app.post("/resultado", (req, res) => {
    
    let notasDict = req.body;
    let creditos = creditosArray.map(Number);

    let notas = [];

    for (nota in notasDict){
        notas.push(notasDict[nota]);
    }

    notas = notas.map(Number);
    
    let crFinal = calculadora.calculoCR(notas, creditos);

    res.render("resultado", {crFinal, titulo : "Resultado"});
    
})



    //dicionário para transformar a sigla do curso no nome dele (Não sei se vai ser necessário)
    // let cursoDict = {
    //     "cs": "Ciclo Básico",
    //     "pp": "Publicidade e Propaganda",
    //     "rtv": "Rádio e TV",
    //     "pe": "Produção Editorial",
    //     "j": "Jornalismo"
    // }







