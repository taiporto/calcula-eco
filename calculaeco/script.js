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
    res.render('index', { root: __dirname, titulo: "Home" });
})

//conectar ao banco de dados
//connection.connectSQL();

//array para guardar os creditos
creditosArray = [];

//Esse POST pesquisa quais cursos estão disponíveis em determinado período
app.post("/calculadora", (req, res) => {

    let cursoSelected = req.body.cursos;
    let periodoSelected = req.body.periodos;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    req.is('text/*');

    //query MongoDB para achar as matérias disponíveis para aquele curso naquele período
    // let queryCurso = {
    //     "curso": cursoSelected,
    //     "periodo": periodoSelected
    // };

    //query MySQL
    const querySQL = "SELECT * from disciplinas WHERE curso='" + cursoSelected + "' AND periodo =" + periodoSelected + " AND valido = 1";

    connection.search(querySQL, (result) => { 
        if(result.length > 0){

            jsonResult = JSON.parse(JSON.stringify(result));

            creditosArray = result.map(function (item) {
                return item.creditos;
            });
    
            res.render("calculadora", { disciplinas: jsonResult});
        }
        else{
            res.send("<span>Por favor insira uma combinação válida</span>");
        }
      });

});

app.post("/escolha", (req, res) => {
    res.render("escolha", { root: __dirname });
})

//Esse POST faz o display dos resultados
app.post("/resultado", (req, res) => {

    let notasDict = req.body;
    let creditos = creditosArray.map(Number);

    console.log(notasDict);
    console.log(creditos);

    let notas = [];

    for (nota in notasDict) {
        notas.push(notasDict[nota]);
    }

    notas = notas.map(Number);

    console.log(notas);

    let crFinal = calculadora.calculoCR(notas, creditos);

    res.render("resultado", { crFinal, titulo: "Resultado" });

})



    //dicionário para transformar a sigla do curso no nome dele (Não sei se vai ser necessário)
    // let cursoDict = {
    //     "cs": "Ciclo Básico",
    //     "pp": "Publicidade e Propaganda",
    //     "rtv": "Rádio e TV",
    //     "pe": "Produção Editorial",
    //     "j": "Jornalismo"
    // }







