import { readFile } from 'fs/promises';

async function lerArquivo() {
 try {
  const dados = await readFile('./arquivo.txt', 'utf-8');
  console.log('Conteúdo do arquivo:\n', dados);

 } catch (error) {
  console.error('Erro ao ler o arquivo ', error);
 }
}

lerArquivo();