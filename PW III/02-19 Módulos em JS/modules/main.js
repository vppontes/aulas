import nextCompetition from './moduleNextButton.js';

const idsCompetitions = [
    '2021',
    '2015',
    '2002',
    '2019',
    '2014',
]

let currentCompetition = 0;

async function proximaCompeticao() {

    if (currentCompetition >= idsCompetitions.length - 1) {
        currentCompetition = 0;
    } else {
        currentCompetition +=1;
    }

    const tabela = await nextCompetition(currentCompetition);
    console.log(nextCompetition(currentCompetition))
}

document.getElementById('Campeonato-posterior').addEventListener('click', proximaCompeticao);