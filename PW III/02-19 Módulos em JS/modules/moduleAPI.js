// Substitua com sua chave de API
const apiKey = '51ba4323b28d4bf1b0c8940c47e6356b';
const base_url = 'https://api.football-data.org/v4/';
const proxy_url = 'https://cors-anywhere.herokuapp.com/';

async function tabelaCompetitions(_idCompetition) {
    let endPoint = `competitions/${String(_idCompetition)}/standings`
    fetch(proxy_url + base_url + endPoint, {
        method: 'GET',
        headers: {
            'X-Auth-Token': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        let arrayTabela = data.standings[0].table;
        console.log(arrayTabela);
        return arrayTabela;
    })
    .catch(error => {
        let resposta = error.message;
        console.log(resposta);
    });
}

export default tabelaCompetitions