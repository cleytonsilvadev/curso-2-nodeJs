function enviarEmail(corpo, para,callback) {
    setTimeout(() => {
      console.log(`
      para:${para}
      -------------------------
      ${corpo}
      -------------------------
      de: cleyton rodrigues`);
      
    callback();
    }, 8000);
  };
  
  console.log("inicio do envio de email");
  enviarEmail("oi seja bem vindo ao suporte CRS","suportecrs96@gmail.com",()=>{
    console.log("ola isso é um callback")
    console.log("ele acaba de ser executado")
  });
  console.log("seu email foi enviado, deve chegar em minutos");
  console.log("TUDO OK!");