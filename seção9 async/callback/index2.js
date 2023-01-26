function enviarEmail(corpo, para,callback) {
  setTimeout(() => {
    console.log(`
    para:${para}
    -------------------------
    ${corpo}
    -------------------------
    de: cleyton rodrigues`);
    
  callback("ok",5,"8s");
  }, 8000);
};

console.log("inicio do envio de email");
enviarEmail("oi seja bem vindo ao suporte CRS","suportecrs96@gmail.com",(status,amount,time)=>{
  console.log(`
  status:${status}
    -------------------------
  contatos:  ${amount}
    -------------------------
  tempo de envio:${time}
    `)
  
});
console.log("seu email foi enviado, deve chegar em minutos");
console.log("TUDO OK!");