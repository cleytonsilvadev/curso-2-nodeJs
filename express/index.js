//importando o express
const express = require("express");
//iniciando o express
const app=express();

//criando uma rotas com respostas
app.get("/",function(req,res){
    res.send("bem vindo ao guia do programador");
});

app.get("/blog",function(req,res){
    res.send("bem vindo ao meu blog");
})

app.get("/canal/youtube",function(req,res){
    res.send("<h1>bem vindo ao meu teste</h1>");
})



app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro!");

    }else{
        console.log("servidor iniciado com sucesso!");

    }
})