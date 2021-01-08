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
let creditosEncontrados = {};


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
            const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@calculaeco-lapzp.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority/`
            
            await mongoose.connect(uri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                .then(function () {
                    console.log('mongoDB connected');
                })
                .catch(error => console.log(error))

            // Acha as disciplinas correspondentes ao período e curso
            const mongoResponse = await Materia.find({
                curso: cursoSelected,
                periodo: Number(periodoSelected)
            });
            
            const disciplinasEncontradas = JSON.parse(JSON.stringify(mongoResponse));

            if(!isEmpty(disciplinasEncontradas)){

                disciplinasEncontradas.forEach(disciplina => {
                    const id_disciplina = disciplina.id_disciplina;
                    const creditos_disciplina = +disciplina.creditos;
                    creditosEncontrados[id_disciplina] = creditos_disciplina;
                })

                res.render("calculadora", { disciplinas: disciplinasEncontradas, titulo: "Calculadora" });
            } 
            else{
                res.send("<span>Por favor insira uma combinação válida.</span>");
            }
        }
    }
    else{
        res.send("<span>Por favor insira uma combinação válida</span>");
    }
});


//POST que calcula e faz o display dos resultados
routes.post("/resultado", (req, res) => {

    let notas = req.body;
    let somatorioNotas = 0,
        somatorioCreditos = 0;

    for (const disciplina in notas){
        const nota = notas[disciplina];
        if(nota !== ''){
            const creditosDisciplina = creditosEncontrados[disciplina];
    
            const crDisciplina = nota * creditosDisciplina;
    
            somatorioNotas+=crDisciplina;
            somatorioCreditos+=creditosDisciplina;
        }
    }

    const crFinal = (somatorioNotas/somatorioCreditos).toFixed(1);

    res.render("resultado", {
        crFinal,
        titulo: "Resultado"
    });
})

module.exports = routes;