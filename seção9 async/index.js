function enviarEmail(corpo, para,callback) {
    setTimeout(() => {
      //logica 

      var deuErro= false
      if(deuErro){
        callback("erro de envio");
      }else{
        callback();
      }
    
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