// GET PLAYER
const getPlayer = document.querySelectorAll('li img');
getPlayer.forEach(p => {
    p.addEventListener('click', function() {
        const comp = getComp();
        changeCompUI(comp);
        const player = p.className;
        result = getResult(player, comp);
        changeUI(result);
    })
})

// COMP CHOICES
function getComp() {
    const comp = Math.random();
    if ( comp < 0.3) return 'rock';
    if ( comp >= 0.3 && comp < 0.6 )return 'scissors';
    return 'paper';
}

// Change COMP UI
function changeCompUI(getComp){
    const imgComputer = document.querySelector('.img-computer');
    const img = ['rock', 'paper', 'scissors'];
    let i = 0;
    const clickStart = new Date().getTime();
    setInterval(() => {
        if( new Date().getTime() - clickStart > 1000 ) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', `img/${img[i++]}.png`);
        if( i == img.length ) {
            i = 0;
        }
    }, 100);
    setTimeout(() => {
        imgComputer.setAttribute('src', `img/${getComp}.png`);
    }, 1000);
}

// CHANGE UI
function changeUI(result) {
    const resultBoard = document.querySelector('.info');
    setTimeout(() => {
        resultBoard.innerHTML = result;
        getScore(result);
    }, 1000);
}

// RULES
function getResult(player, computer) {
    if ( player == computer ) return 'DRAW';
    if ( player == 'rock' ) return computer == 'paper' ? 'LOSE' : 'WIN';
    if ( player == 'scissors' ) return computer == 'rock' ? 'LOSE' : 'WIN';
    if ( player == 'paper' ) return computer == 'scissors' ? 'LOSE' : 'WIN';
}

// SCORE
let c = 1;
let p = 1;
function getScore(result) {
    const playerScore = document.querySelector('.player-score');
    const compScore = document.querySelector('.computer-score');
    if( result == 'WIN' ) {
        let pScore = p++;
        playerScore.innerHTML = pScore;
    };
    if( result == 'LOSE' ) {
        let cScore = c++;
        compScore.innerHTML = cScore;
    };
}