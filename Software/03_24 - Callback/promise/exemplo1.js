const itens = [1, 2, 3, 4, 5];

async function processarItens(itens) {

 for(let item of itens) {
  await processarItem(item);
  console.log(`Item: ${item} processado`);
 }
}

async function processarItem(item) {
 return new Promise(resolve => {
   setTimeout(() => {
    resolve(console.log(`Processamento do item ${item} concluído`))
   }, 1000);
  }
 );
}

processarItem(itens);