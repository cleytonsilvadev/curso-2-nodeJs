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
});

app.get("/canal/youtube",function(req,res){
    res.send("<h1>bem vindo ao meu teste</h1>");
});
    
app.get("/ola/:nome",function(req,res){
    var nome=req.params.nome;
    res.send("<h1>oi " + nome+"<h1>");
});
    //parametros obgatorios
app.get("/ola/:nome/:empresa",function(req,res){
    var nome=req.params.nome;
    var empresa=req.params.empresa;
    res.send("<h1>oi " + nome+" do "+empresa+"<h1>");
});
    //parametros opcionais
    /*
app.get("/blog/:artigo?",function(req,res){
    var artigo=req.params.artigo;

    if(artigo){
        res.send("<h2>artigo:"+artigo+"</h2>")    
    }else{
        res.send("bem vindo ao meu blog "+artigo);
}
});
*/
app.get("/blog/:blog?",function(req,res){
    var blog=req.query["blog"];

    if(blog){
        res.send(blog);   
    }else{
        res.send("nenhum canal fornecido");
    }
});

app.listen(4000,function(erro){
    if(erro){
        console.log("ocorreu um erro!");

    }else{
        console.log("servidor iniciado com sucesso!");

    }
})