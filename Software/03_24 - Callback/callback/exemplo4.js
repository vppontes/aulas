function fetchDados(callback) {

 setTimeout(() => {
  const dados = {id: 69, nome: 'Dani Góis'};
  callback(dados);
 }, 2000);

}

function processarDados(dados) {
 console.log('Dados recebidos: ', dados);
}

fetchDados(processarDados);