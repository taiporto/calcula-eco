//TODO: descobrir como faz o find para retornar as matérias certas

const Materia = require("../models/Materia")

module.exports = {
    search(req, res){

        const periodoSelected = req.query.periodo;
        const cursoSelected = req.query.curso;
        
        materia = Materia.find({periodo: 1})

    }
}