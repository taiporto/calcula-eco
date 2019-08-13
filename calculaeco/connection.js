module.exports = {
    connect: function () {
        
        const MongoClient = require("mongodb").MongoClient;
        const mongoose = require('mongoose');
        const ObjectId = require("mongodb").ObjectID;
        
        // let CONNECTION_URL = "mongodb+srv://public:HxnpHEg3OnxJgDSt@cluster0-yfisq.gcp.mongodb.net/test?retryWrites=true&w=majority";
        let CONNECTION_URL = process.env.MONGODB_URI || "mongodb+srv://public:HxnpHEg3OnxJgDSt@cluster0-yfisq.gcp.mongodb.net/bdcalculaeco?retryWrites=true&w=majority";
        const DATABASE_NAME = "bdcalculaeco";

        // MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {

        //     if (error) {
        //         throw error;
        //     }

        //     database = client.db(DATABASE_NAME);

        //     collection = database.collection("disciplinas");

        //     console.log("Connected to `" + DATABASE_NAME + "`!");
        // });

        // , (error) =>{
        //     if (error) {
        //         throw error;
        //     }
        //     collection = client.db(DATABASE_NAME);
        //     console.log("Connected to `" + DATABASE_NAME + "`!");
        // });

        mongoose.connect(CONNECTION_URL, {useNewUrlParser: true});

        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            console.log("Connected to `" + DATABASE_NAME + "`!");
            
            collection = db.collection("disciplinas");
        });
    }

    // closeConn: function(){
        
    // }
}
