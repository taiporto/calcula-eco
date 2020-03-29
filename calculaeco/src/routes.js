const express = require('express');
const mongoose = require('mongoose');

const routes = express.Router();


//módulo que faz a conta do cr
const calculoCR = require('./functionalities').calculoCR;

//módulo que verifica se o objeto está vazio
const isEmpty = require('./functionalities').isEmpty;

//Model do MongoDB para as matérias
const Materia = require("./models/Materia");

let creditosArray = [];


//GET para abrir a página inicial
routes.get("/", (req, res) => {
    res.render('index', {
        root: __dirname,
        titulo: "Calculadora de C.R."
    });
})

//GET teste mongoDB
routes.get("/calculadora", (req, res) => {

    let cursoSelected = req.query.curso;
    let periodoSelected = req.query.periodo;

    if (cursoSelected != "na" || periodoSelected != "0") {

        run().catch(error => console.log(error.stack));
        
        async function run() {
            const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@calculaeco-lapzp.mongodb.net/bdcalculaeco?retryWrites=true&w=majority/`

            await mongoose.connect(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                .then(function () {
                    console.log('mongoDB connected');
                })
                .catch(error => console.log(error))

            // Acha a matéria
            const docs = await Materia.find({
                curso: cursoSelected,
                periodo: parseInt(periodoSelected)
            });

            
            const result = JSON.parse(JSON.stringify(docs))
            
            if(!isEmpty(result)){
                for (item in result){
                    creditosArray.push(result[item]['creditos'])
                }
                res.render("calculadora", { disciplinas: result, titulo: "Calculadora" });
            } 
            else{
                res.send("<span>Por favor insira uma combinação válida</span>");
            }
        }
    }
    else{
        res.send("<span>Por favor insira uma combinação válida</span>");
    }
});


//POST que faz o display dos resultados
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

    res.render("resultado", {
        crFinal,
        titulo: "Resultado"
    });

})

module.exports = routes;