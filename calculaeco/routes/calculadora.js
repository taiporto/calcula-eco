//router
const express = require('express');
const router = express.Router();

router.post("/calculadora", (req, res) => {

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
        if (result.length > 0) {

            jsonResult = JSON.parse(JSON.stringify(result));

            creditosArray = result.map(function (item) {
                return item.creditos;
            });

            res.render("calculadora", { disciplinas: jsonResult });
        }
        else {
            res.send("<span>Por favor insira uma combinação válida</span>");
        }
    });

});

module.exports = router;