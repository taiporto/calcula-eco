const mysql = require('mysql');
require('dotenv').config();


const DATABASE_NAME = "bdcalculaeco";
let PASSWORD = process.env.PASSWORD || 'Eou8HH0tv90cSqNN';

const conn = mysql.createConnection({
    host: 'db4free.net',
    port: 3306,
    user: 'mk23_02',
    password: PASSWORD,
    database: DATABASE_NAME
});

conn.connect(function(err) {
	if (err) throw err
	
});

module.exports = {
    // connect: function () {
    //     const mongoose = require('mongoose');

    //     let CONNECTION_URL = process.env.MONGO_URI || "mongodb+srv://public:HxnpHEg3OnxJgDSt@cluster0-yfisq.gcp.mongodb.net/bdcalculaeco?replicaSet=Cluster0-shard-0&retryWrites=true&w=majority&authSource=admin";
    //     const DATABASE_NAME = "bdcalculaeco";

    //     mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });

    //     let db = mongoose.connection;
    //     db.on('error', console.error.bind(console, 'connection error:'));
    //     db.once('open', function () {
    //         console.log("Connected to `" + DATABASE_NAME + "`!");

    //         collection = db.collection("disciplinas");
    //     });
    // },

    search: function (querySQL, callback) {

        conn.query(querySQL, (error, results) => {
                
            if (error){
                callback(error, null)
            }
            else if(results){
                callback(results);
            }
        })
        
    }
}



    // closeConn: function(){

    // }

