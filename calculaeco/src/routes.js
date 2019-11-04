//TODO: Resolver a questão de passar tudo do script.js para o routes e o server

const express = require('express');
const routes = express.Router()

const search = require('./functionalities').search;

//módulo que faz a conta do cr
const calculoCR = require('./functionalities').calculoCR;
const isEmpty = require('./functionalities').isEmpty;

let creditosArray = [];

//GET para abrir a página inicial
routes.get("/", (req, res) => {
    res.render('index', { root: __dirname, titulo: "Calculadora de C.R." });
})


//GET matérias que obedecem à relação curso/período e retorna a página da calculadora
routes.get("/calculadora", (req, res) => {

    let cursoSelected = req.query.curso;
    let periodoSelected = req.query.periodo;

    console.log(req.query.periodo);

    res.setHeader('content-type', 'text/html; charset=utf-8');
    req.is('text/*');

    //query MySQL
    const querySQL = `SELECT * from ${cursoSelected} WHERE periodo = ${periodoSelected} AND valido = 1`;

    if (cursoSelected != "na" || periodoSelected != "0") {
        search(querySQL, (result) => {
            if (!isEmpty(result)) {
                console.log(result);
                creditosArray = result.map(function (item) {
                    return item.creditos;
                });
                res.render("calculadora", { disciplinas: result, titulo: "Calculadora" });
            }
            else {
                res.send("<span>Por favor insira uma combinação válida</span>");
            }
        });
    }
    else {
        res.send("<span>Por favor insira uma combinação válida</span>");
    }

});

routes.post("/escolha", (req, res) => {
    res.render("escolha", { root: __dirname });
})

//POST faz o display dos resultados
routes.post("/resultado", (req, res) => {

    let notasDict = req.body;
    let creditos = creditosArray.map(Number);
    let creditosAtt = [];
    let notas = [];

    for (nota in notasDict) {
        if (notasDict[nota] != 0) {
            notas.push(notasDict[nota]);
            creditosAtt.push(creditos[nota - 1]);
        }
    }

    notas = notas.map(Number);

    console.log(notas);

    console.log(creditosAtt);

    let crFinal = calculoCR(notas, creditosAtt);

    res.render("resultado", { crFinal, titulo: "Resultado" });

})

module.exports = routes;