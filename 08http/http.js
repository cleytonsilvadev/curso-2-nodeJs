var http = require("http");

http.createServer(function(require,resposta){
    resposta.end("<h1>bem vindo ao meu site</h1> <br> <h4>https://linktr.ee/cleytonsilvadev</h4>");
}).listen(8181);

console.log("meu server funciona!!")