const search = require('./functionalities').search;

//módulo que faz a conta do cr
const calculoCR = require('./functionalities').calculoCR;
const isEmpty = require('./functionalities.js').isEmpty;

const app = require('./app.js');

//port
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Running on port", port);
});


app.get("/", (req, res) => {
    res.render('index', { root: __dirname, titulo: "Home" });
})


//array para guardar os creditos
creditosArray = [];

//Esse POST pesquisa quais cursos estão disponíveis em determinado período
app.get("/calculadora", (req, res) => {

    // let cursoSelected = req.body.cursos;
    // let periodoSelected = req.body.periodos;
    let cursoSelected = req.query.curso;
    let periodoSelected = req.query.periodo;

    console.log(req.query.periodo);
    
    res.setHeader('content-type', 'text/html; charset=utf-8');
    req.is('text/*');

    //query MySQL
    const querySQL = `SELECT * from ${cursoSelected} WHERE periodo = ${periodoSelected} AND valido = 1`;

    if(cursoSelected != "na" || periodoSelected != "0"){
    search(querySQL, (result) => {      
        if(!isEmpty(result)){
            console.log(result);
            creditosArray = result.map(function (item) {
                return item.creditos;
            });
            res.render("calculadora", { disciplinas: result, titulo: "Calculadora"});
        }
        else{
            res.send("<span>Por favor insira uma combinação válida</span>");
        }
      });
    }
    else{
        res.send("<span>Por favor insira uma combinação válida</span>");
    }

});

app.post("/escolha", (req, res) => {
    res.render("escolha", { root: __dirname });
})

//Esse POST faz o display dos resultados
app.post("/resultado", (req, res) => {

    let notasDict = req.body;
    let creditos = creditosArray.map(Number);
    let creditosAtt = [];
    let notas = [];

    for (nota in notasDict) {
        if(notasDict[nota] != 0){
            notas.push(notasDict[nota]);
            creditosAtt.push(creditos[nota-1]);
        }
    }

    notas = notas.map(Number);

    console.log(notas);

    console.log(creditosAtt);

    let crFinal = calculoCR(notas, creditosAtt);

    res.render("resultado", { crFinal, titulo: "Resultado" });

})


    //dicionário para transformar a sigla do curso no nome dele (Não sei se vai ser necessário)
    // let cursoDict = {
    //     "cs": "Ciclo Básico",
    //     "pp": "Publicidade e Propaganda",
    //     "rtv": "Rádio e TV",
    //     "pe": "Produção Editorial",
    //     "j": "Jornalismo"
    // }







