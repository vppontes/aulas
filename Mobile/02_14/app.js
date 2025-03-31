import Aluno from './aluno.js';
import Professor from './professor.js';

//criar instâncias

const aluno1 = new Aluno("Victor", 17, "DS");
const professor1 = new Professor("Leandrinha", 42, "Gostosa")

const aluno2 = new Aluno("Victor2", 172, "DS2");
const professor2 = new Professor("Leandrinha2", 422, "Gostosa2")

console.log(aluno1.exibirInfo());
console.log(professor1.exibirInfo());
console.log("");

console.log(aluno2.exibirInfo());
console.log(professor2.exibirInfo());
console.log("");

console.log(professor1.darAula());
console.log(professor2.darAula());