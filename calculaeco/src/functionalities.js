//Requerimento do módulo do MySQL
const mysql = require('mysql');

//Requerimento do módulo do MongoDB
const mongoose = require('mongoose');

require('dotenv').config()

const uri = 'mongodb+srv://mk23_02:'+process.env.PASSWORD+'@calculaeco-lapzp.mongodb.net/calculaeco?retryWrites=true&w=majority/'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(function(){
    console.log('mongoDB connected');
})
.catch(function(){
    console.log('Error :');
}) 


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
        
        console.log(sumNotas);

        let cr = (sumNotas / sumCredito);

        console.log(cr);

        cr = cr.toFixed(1);

        let crFinal = parseFloat(cr);

        return crFinal;

    }
}





