    const MongoClient = require("mongodb").MongoClient;
    const ObjectId = require("mongodb").ObjectID;
    const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0-yfisq.gcp.mongodb.net/test?retryWrites=true&w=majority";
    const DATABASE_NAME = "bdcalculaeco";

    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {

        if (error) {
            throw error;
        }

        database = client.db(DATABASE_NAME);

        collection = database.collection("disciplinas");

        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
