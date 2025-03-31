import tabelaCompetitions from "./moduleAPI.js";

const idsCompetitions = [
    '2021',
    '2015',
    '2002',
    '2019',
    '2014',
]

async function nextCompetition(_currentCompetition) {
    const tabela = await tabelaCompetitions(idsCompetitions[_currentCompetition]);
    return tabela
}

export default nextCompetition;