const mysql = require('mysql');

require('dotenv').config();


const conn = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORTSQL,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
});

conn.connect(function(err) {
	if (err) throw err
	
});

module.exports = {
    search: function (querySQL, callback) {

        let resultFinal = {};

        conn.query(querySQL, (error, results) => { 
            if (error){
                callback(error, null);
            }
            else if(results){
                if(results.length > 0){
                    resultFinal = JSON.parse(JSON.stringify(results));
                }
                callback(resultFinal);
                
            }
        })
        
    },

    isEmpty: function(obj){
        return Object.keys(obj).length === 0;
    },

    //TIRAR MATERIAS Q A PESSOA N COLOCOU NADA (IMPLEMENTAR FUNÇÃO DE EXCLUIR MATÉRIAS)
    calculoCR: function (notasArray, creditosArray) {

        let sumCredito = 0;
        let sumNotas = 0;

        for (let j = 0; j < creditosArray.length; j++) {

            sumCredito += creditosArray[j];
        }

        console.log(sumCredito);

        for (let i = 0; i < notasArray.length; i++) {
            
            let nota = notasArray[i] * creditosArray[i];
            
            sumNotas += nota;
        }
        
        //sumNotas sai errado nas do ciclo basico
        console.log(sumNotas);

        let cr = (sumNotas / sumCredito);

        console.log(cr);

        function casasDecimais(num, precisao) {
            let casas = Math.pow(10, precisao);
            return Math.floor(num * casas) / casas;
        };
        
        //cr arredondando errado?? olhar isso aí
        cr = casasDecimais(cr, 1);

        return cr;

    }
}





