//TODO: Resolver erro "running on port undefined"

const routes = require('./routes');

const app = require('./app');

app.use(routes);

require('dotenv').config();


//setando a porta e abrindo a conexão
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Running on port", port);
});
