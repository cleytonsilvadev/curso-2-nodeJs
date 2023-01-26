function enviarEmail(corpo, para) {
  setTimeout(() => {
    console.log(`
    para:${para}
    -------------------------
    ${corpo}
    -------------------------
    de: cleyton rodrigues`);
  }, 8000);
};

console.log("inicio do envio de email");
enviarEmail("oi seja bem vindo ao suporte CRS","suportecrs96@gmail.com");
console.log("seu email foi enviado, deve chegar em minutos");
console.log("TUDO OK!");