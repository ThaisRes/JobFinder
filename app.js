
const express = require ('express');
const app = express();
const PORT = 3000;
const db = require ('./db/conection');
const bodyParser = require('body-parser');

//abra no navegador: localhost.3000

app.listen(PORT, function(){
    console.log (`O Express está rodando na porta ${PORT}`);
});

//body Parser
app.use(bodyParser.urlencoded({
    extended:false
}));

//jobs routes - chamar as rotas
app.use('/jobs', require('./routes/jobs'));

// db conection
db
    .authenticate()
    .then(()=>{
        console.log ("Conectou com o banco de dados");
})
    .catch(err => {
        console.log("Erro ao conectar com o banco de dados")
    })

//Routes
app.get('/',(req,res)=>{
    res.send('Está funcionando');
})