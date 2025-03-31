async function fetchData(cep) {

 try {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if(!response) {
   throw new Error('Erro na requisição: ', response.status);
  }

  const data = await response.json();
  console.log(data);

 } catch (error) {
   console.log('Erro ao buscar dados, ', error);
 }

}

fetchData('02541090');