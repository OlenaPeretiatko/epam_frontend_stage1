let txt;
let play = confirm('Do you want to play a game?');
let total = 0;
let rand = 9;
let startSum = 100;
if (play === true) {
    playGame();
} else {
    alert('You did not become a billionaire, but can.');
}

function playGame() {
    let sum = startSum;
    let randNum = Math.floor(Math.random() * rand);
    console.log(randNum, rand);
    const attempts = 3;
    let winnerOrLoser = false;

    for (let i = 0; i < attempts; i++) {
        txt = 'Choose a roulette pocket number from 0 to ' + (rand - 1) + ' \n' +
            'Attempts left: ' + (attempts - i) + '\n' +
            'Total prize: ' + total + '$' + '\n' +
            'Possible prize on current attempt ' + sum + '$' + '\n';
        console.log(txt)
        let userNum = parseFloat(prompt(txt));
        if (randNum === userNum) {
            winnerOrLoser += true;
            break;
        } else if (randNum !== userNum) {
            winnerOrLoser += false;
        }
        sum /= 2;
        if (sum < startSum / 4) {
            sum = 0;
        }
    }
    const contGame = '\nDo you want to continue?';
    if (Boolean(winnerOrLoser) === true) {
        play = confirm('Congratulation, you won! Your prize is: ' + sum + '$' + contGame)
    } else {
        play = confirm('Thank you for your participation. Your prize is: ' + sum + '$' + contGame)
    }
    total += sum;
    rand += 4;
    startSum *= 2;
    console.log(rand);
    if (play === true) {
        playGame();
    } else {
        alert('Thank you for your participation. Your prize is: ' + total + '$');
    }

}
