const express = require("express");
const app=express();

app.set('view engine','ejs');

app.get("/:nome/:lang",function(req,res){
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg=false;
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "suportecrs",
        inscritos:8000,
        msg:exibirMsg
    });
});

app.listen(8080,()=>{console.log("servidor iniciado com sucesso!");});