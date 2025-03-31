function saudar(nome, callback) {

 console.log('Olá ' + nome);
 callback();

}

function despedir() {
 console.log('Tchau');
}

saudar('Dani Góis', despedir);