//router
const express = require('express');
const router = express.Router();


//Esse POST faz o display dos resultados
router.post("/resultado", (req, res) => {

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

module.exports = router;