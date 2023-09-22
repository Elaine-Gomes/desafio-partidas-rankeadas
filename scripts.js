
const form = document.querySelector('#form');
const victories = document.querySelector('#victories');
const defeats = document.querySelector('#defeats');

(function main() {

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let valueVictories = victories.value;
        let valueDefeats = defeats.value;

        valueVictories = parseInt(valueVictories);
        valueDefeats = parseInt(valueDefeats);

        if (victories.value === '' || defeats.value === '') {
            alert('Os campos não podem está vazios!')
            
        } else {
            calculateRanking(valueVictories, valueDefeats)
            clearFields()
        }

    })

})()

function calculateRanking(victories, defeats) {

    let winBalance = victories - defeats;
    calculateHeroicLevel(winBalance)
}

function calculateHeroicLevel(winBalance) {
    let level = '';

    if (winBalance < 10) {
        level = 'Ferro';
    } else if (winBalance >= 11 && winBalance <= 20) {
        level = 'Bronze';
    } else if (winBalance >= 21 && winBalance <= 50) {
        level = 'Prata';
    } else if (winBalance >= 51 && winBalance <= 80) {
        level = 'Ouro';
    } else if (winBalance >= 81 && winBalance <= 90) {
        level = 'Diamante';
    } else if (winBalance >= 91 && winBalance <= 100) {
        level = 'Lendário'
    } else if (winBalance >= 101) {
        level = 'Imortal';
    }

    const message = `O Herói tem de saldo de  ${winBalance} e está no nível de ${level}`
    alert(message)
}

function clearFields() {
    victories.value = '';
    defeats.value = ';'
}