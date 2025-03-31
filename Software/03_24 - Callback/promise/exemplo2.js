function exemploPromise() {
 
 return new Promise((resolve, reject) => {
  setTimeout(() => {

   const sucesso = true;
   
   if (sucesso) {
    resolve('Operação bem sucedida');
   } else {
    reject('Erro na operação');
   }
  }, 2000);
 })
}
// usando a promise
exemploPromise().then((mensagemSucesso) => {
 console.log(mensagemSucesso);
})
.catch((mensagemErro) => {
 console.error(mensagemErro);
});