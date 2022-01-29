/////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////

let playerOneScore = 0;
let computerScore = 0;
let playerOneCurrentRoundScore = 0;
let computerCurrentRoundScore = 0;
let playerOneCurrentRoundScoreThreePointer = 0;
let computerCurrentRoundScoreThreePointer = 0;
let playerOneCurrentRoundScoreOnePointer = 0;
let computerCurrentRoundScoreOnePointer = 0;
let roundWinner = true;
let difficulty = '';
let onePointShot = false;
let threePointShot = false;

/////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////

function displayPlayerBags() {
    playerBags.innerHTML = `Player Bags: ${playerOneGame.bags.length}`;
};

function displayComputerBags() {
    computerBags.innerHTML = `Computer Bags: ${computerOneGame.bags.length}`
};

function displayPlayerScoreRound3PT() {
    playerRoundScoreDOM.innerHTML = `Player Round 3PT Made: ${playerOneCurrentRoundScoreThreePointer}`
};

function displayComputerScoreRound3PT() {
    computerRoundScoreDOM.innerHTML = `Computer Round 3PT Made: ${computerCurrentRoundScoreThreePointer}`;
};

function displayGameScore() {
    gameScoreDOM.innerHTML = `${playerOneGame.name} has ${playerOneScore} points and The ${computerOneGame.name} has ${computerScore} points.`;
};


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

function hidePlayerElements() {
    if(!playerButtons.classList.contains('hidden')) {
        playerButtons.classList.add('hidden')
    }
    if(!throwBag.classList.contains('hidden')) {
        throwBag.classList.add('hidden')
    }
};

function hideComputerElements() {
    if(!computerButtons.classList.contains('hidden')) {
        computerButtons.classList.add('hidden')
    }
};

function unhidePlayerElements() {
    if(playerButtons.classList.contains('hidden')) {
        playerButtons.classList.remove('hidden')
    }
    if(throwBag.classList.contains('hidden')) {
        throwBag.classList.remove('hidden')
    }
};

function unhideComputerElements() {
    if(computerButtons.classList.contains('hidden')) {
        computerButtons.classList.remove('hidden')
    }
};

function clearBoard() {
    if(!playerButtons.classList.contains('hidden')) {
        playerButtons.classList.add('hidden')
    }
    if(!throwBag.classList.contains('hidden')) {
        throwBag.classList.add('hidden')
    }
    if(!computerButtons.classList.contains('hidden')) {
        computerButtons.classList.add('hidden')
    }
    if(resetButton.classList.contains('hidden')) {
        resetButton.classList.remove('hidden')
    }
};

function addPurpleBag() {
    let num = getRandomIntInclusive(1,28);
    if(num === 1) {
        if(grid1.classList.contains('yellow')) {grid1.classList.remove('yellow')}
        if(grid1.classList.contains('purple')) {grid1.classList.remove('purple')}
        grid1.classList.add('purple')
    }
    if(num === 2) {
        if(grid2.classList.contains('yellow')) {grid2.classList.remove('yellow')}
        if(grid2.classList.contains('purple')) {grid2.classList.remove('purple')}
        grid2.classList.add('purple')
    }
    if(num === 3) {
        if(grid3.classList.contains('yellow')) {grid3.classList.remove('yellow')}
        if(grid3.classList.contains('purple')) {grid3.classList.remove('purple')}
        grid3.classList.add('purple')
    }
    if(num === 4) {
        if(grid4.classList.contains('yellow')) {grid4.classList.remove('yellow')}
        if(grid4.classList.contains('purple')) {grid4.classList.remove('purple')}
        grid4.classList.add('purple')
    }
    if(num === 5) {
        if(grid5.classList.contains('yellow')) {grid5.classList.remove('yellow')}
        if(grid5.classList.contains('purple')) {grid5.classList.remove('purple')}
        grid5.classList.add('purple')
    }
    if(num === 6) {
        if(grid6.classList.contains('yellow')) {grid6.classList.remove('yellow')}
        if(grid6.classList.contains('purple')) {grid6.classList.remove('purple')}
        grid6.classList.add('purple')
    }
    if(num === 7) {
        if(grid7.classList.contains('yellow')) {grid7.classList.remove('yellow')}
        if(grid7.classList.contains('purple')) {grid7.classList.remove('purple')}
        grid7.classList.add('purple')
    }
    if(num === 8) {
        if(grid8.classList.contains('yellow')) {grid8.classList.remove('yellow')}
        if(grid8.classList.contains('purple')) {grid8.classList.remove('purple')}
        grid8.classList.add('purple')
    }
    if(num === 9) {
        if(grid9.classList.contains('yellow')) {grid9.classList.remove('yellow')}
        if(grid9.classList.contains('purple')) {grid9.classList.remove('purple')}
        grid9.classList.add('purple')
    }
    if(num === 10) {
        if(grid10.classList.contains('yellow')) {grid10.classList.remove('yellow')}
        if(grid10.classList.contains('purple')) {grid10.classList.remove('purple')}
        grid10.classList.add('purple')
    }
    if(num === 11) {
        if(grid11.classList.contains('yellow')) {grid11.classList.remove('yellow')}
        if(grid11.classList.contains('purple')) {grid11.classList.remove('purple')}
        grid11.classList.add('purple')
    }
    if(num === 12) {
        if(grid12.classList.contains('yellow')) {grid12.classList.remove('yellow')}
        if(grid12.classList.contains('purple')) {grid12.classList.remove('purple')}
        grid12.classList.add('purple')
    }
    if(num === 13) {
        if(grid13.classList.contains('yellow')) {grid13.classList.remove('yellow')}
        if(grid13.classList.contains('purple')) {grid13.classList.remove('purple')}
        grid13.classList.add('purple')
    }
    if(num === 14) {
        if(grid14.classList.contains('yellow')) {grid14.classList.remove('yellow')}
        if(grid14.classList.contains('purple')) {grid14.classList.remove('purple')}
        grid14.classList.add('purple')
    }
    if(num === 15) {
        if(grid15.classList.contains('yellow')) {grid15.classList.remove('yellow')}
        if(grid15.classList.contains('purple')) {grid15.classList.remove('purple')}
        grid15.classList.add('purple')
    }
    if(num === 16) {
        if(grid16.classList.contains('yellow')) {grid16.classList.remove('yellow')}
        if(grid16.classList.contains('purple')) {grid16.classList.remove('purple')}
        grid16.classList.add('purple')
    }
    if(num === 17) {
        if(grid17.classList.contains('yellow')) {grid17.classList.remove('yellow')}
        if(grid17.classList.contains('purple')) {grid17.classList.remove('purple')}
        grid17.classList.add('purple')
    }
    if(num === 18) {
        if(grid18.classList.contains('yellow')) {grid18.classList.remove('yellow')}
        if(grid18.classList.contains('purple')) {grid18.classList.remove('purple')}
        grid18.classList.add('purple')
    }
    if(num === 19) {
        if(grid19.classList.contains('yellow')) {grid19.classList.remove('yellow')}
        if(grid19.classList.contains('purple')) {grid19.classList.remove('purple')}
        grid19.classList.add('purple')
    }
    if(num === 20) {
        if(grid20.classList.contains('yellow')) {grid20.classList.remove('yellow')}
        if(grid20.classList.contains('purple')) {grid20.classList.remove('purple')}
        grid20.classList.add('purple')
    }
    if(num === 21) {
        if(grid21.classList.contains('yellow')) {grid21.classList.remove('yellow')}
        if(grid21.classList.contains('purple')) {grid21.classList.remove('purple')}
        grid21.classList.add('purple')
    }
    if(num === 22) {
        if(grid22.classList.contains('yellow')) {grid22.classList.remove('yellow')}
        if(grid22.classList.contains('purple')) {grid22.classList.remove('purple')}
        grid22.classList.add('purple')
    }
    if(num === 23) {
        if(grid23.classList.contains('yellow')) {grid23.classList.remove('yellow')}
        if(grid23.classList.contains('purple')) {grid23.classList.remove('purple')}
        grid23.classList.add('purple')
    }
    if(num === 24) {
        if(grid24.classList.contains('yellow')) {grid24.classList.remove('yellow')}
        if(grid24.classList.contains('purple')) {grid24.classList.remove('purple')}
        grid24.classList.add('purple')
    }
    if(num === 25) {
        if(grid25.classList.contains('yellow')) {grid25.classList.remove('yellow')}
        if(grid25.classList.contains('purple')) {grid25.classList.remove('purple')}
        grid25.classList.add('purple')
    }
    if(num === 26) {
        if(grid26.classList.contains('yellow')) {grid26.classList.remove('yellow')}
        if(grid26.classList.contains('purple')) {grid26.classList.remove('purple')}
        grid26.classList.add('purple')
    }
    if(num === 27) {
        if(grid27.classList.contains('yellow')) {grid27.classList.remove('yellow')}
        if(grid27.classList.contains('purple')) {grid27.classList.remove('purple')}
        grid27.classList.add('purple')
    }
    if(num === 28) {
        if(grid28.classList.contains('yellow')) {grid28.classList.remove('yellow')}
        if(grid28.classList.contains('purple')) {grid28.classList.remove('purple')}
        grid28.classList.add('purple')
    }
};

function addYellowBag() {
    let num = getRandomIntInclusive(1,28);
    if(num === 1) {
        if(grid1.classList.contains('yellow')) {grid1.classList.remove('yellow')}
        if(grid1.classList.contains('purple')) {grid1.classList.remove('purple')}
        grid1.classList.add('yellow')
    }
    if(num === 2) {
        if(grid2.classList.contains('yellow')) {grid2.classList.remove('yellow')}
        if(grid2.classList.contains('purple')) {grid2.classList.remove('purple')}
        grid2.classList.add('yellow')
    }
    if(num === 3) {
        if(grid3.classList.contains('yellow')) {grid3.classList.remove('yellow')}
        if(grid3.classList.contains('purple')) {grid3.classList.remove('purple')}
        grid3.classList.add('yellow')
    }
    if(num === 4) {
        if(grid4.classList.contains('yellow')) {grid4.classList.remove('yellow')}
        if(grid4.classList.contains('purple')) {grid4.classList.remove('purple')}
        grid4.classList.add('yellow')
    }
    if(num === 5) {
        if(grid5.classList.contains('yellow')) {grid5.classList.remove('yellow')}
        if(grid5.classList.contains('purple')) {grid5.classList.remove('purple')}
        grid5.classList.add('yellow')
    }
    if(num === 6) {
        if(grid6.classList.contains('yellow')) {grid6.classList.remove('yellow')}
        if(grid6.classList.contains('purple')) {grid6.classList.remove('purple')}
        grid6.classList.add('yellow')
    }
    if(num === 7) {
        if(grid7.classList.contains('yellow')) {grid7.classList.remove('yellow')}
        if(grid7.classList.contains('purple')) {grid7.classList.remove('purple')}
        grid7.classList.add('yellow')
    }
    if(num === 8) {
        if(grid8.classList.contains('yellow')) {grid8.classList.remove('yellow')}
        if(grid8.classList.contains('purple')) {grid8.classList.remove('purple')}
        grid8.classList.add('yellow')
    }
    if(num === 9) {
        if(grid9.classList.contains('yellow')) {grid9.classList.remove('yellow')}
        if(grid9.classList.contains('purple')) {grid9.classList.remove('purple')}
        grid9.classList.add('yellow')
    }
    if(num === 10) {
        if(grid10.classList.contains('yellow')) {grid10.classList.remove('yellow')}
        if(grid10.classList.contains('purple')) {grid10.classList.remove('purple')}
        grid10.classList.add('yellow')
    }
    if(num === 11) {
        if(grid11.classList.contains('yellow')) {grid11.classList.remove('yellow')}
        if(grid11.classList.contains('purple')) {grid11.classList.remove('purple')}
        grid11.classList.add('yellow')
    }
    if(num === 12) {
        if(grid12.classList.contains('yellow')) {grid12.classList.remove('yellow')}
        if(grid12.classList.contains('purple')) {grid12.classList.remove('purple')}
        grid12.classList.add('yellow')
    }
    if(num === 13) {
        if(grid13.classList.contains('yellow')) {grid13.classList.remove('yellow')}
        if(grid13.classList.contains('purple')) {grid13.classList.remove('purple')}
        grid13.classList.add('yellow')
    }
    if(num === 14) {
        if(grid14.classList.contains('yellow')) {grid14.classList.remove('yellow')}
        if(grid14.classList.contains('purple')) {grid14.classList.remove('purple')}
        grid14.classList.add('yellow')
    }
    if(num === 15) {
        if(grid15.classList.contains('yellow')) {grid15.classList.remove('yellow')}
        if(grid15.classList.contains('purple')) {grid15.classList.remove('purple')}
        grid15.classList.add('yellow')
    }
    if(num === 16) {
        if(grid16.classList.contains('yellow')) {grid16.classList.remove('yellow')}
        if(grid16.classList.contains('purple')) {grid16.classList.remove('purple')}
        grid16.classList.add('yellow')
    }
    if(num === 17) {
        if(grid17.classList.contains('yellow')) {grid17.classList.remove('yellow')}
        if(grid17.classList.contains('purple')) {grid17.classList.remove('purple')}
        grid17.classList.add('yellow')
    }
    if(num === 18) {
        if(grid18.classList.contains('yellow')) {grid18.classList.remove('yellow')}
        if(grid18.classList.contains('purple')) {grid18.classList.remove('purple')}
        grid18.classList.add('yellow')
    }
    if(num === 19) {
        if(grid19.classList.contains('yellow')) {grid19.classList.remove('yellow')}
        if(grid19.classList.contains('purple')) {grid19.classList.remove('purple')}
        grid19.classList.add('yellow')
    }
    if(num === 20) {
        if(grid20.classList.contains('yellow')) {grid20.classList.remove('yellow')}
        if(grid20.classList.contains('purple')) {grid20.classList.remove('purple')}
        grid20.classList.add('yellow')
    }
    if(num === 21) {
        if(grid21.classList.contains('yellow')) {grid21.classList.remove('yellow')}
        if(grid21.classList.contains('purple')) {grid21.classList.remove('purple')}
        grid21.classList.add('yellow')
    }
    if(num === 22) {
        if(grid22.classList.contains('yellow')) {grid22.classList.remove('yellow')}
        if(grid22.classList.contains('purple')) {grid22.classList.remove('purple')}
        grid22.classList.add('yellow')
    }
    if(num === 23) {
        if(grid23.classList.contains('yellow')) {grid23.classList.remove('yellow')}
        if(grid23.classList.contains('purple')) {grid23.classList.remove('purple')}
        grid23.classList.add('yellow')
    }
    if(num === 24) {
        if(grid24.classList.contains('yellow')) {grid24.classList.remove('yellow')}
        if(grid24.classList.contains('purple')) {grid24.classList.remove('purple')}
        grid24.classList.add('yellow')
    }
    if(num === 25) {
        if(grid25.classList.contains('yellow')) {grid25.classList.remove('yellow')}
        if(grid25.classList.contains('purple')) {grid25.classList.remove('purple')}
        grid25.classList.add('yellow')
    }
    if(num === 26) {
        if(grid26.classList.contains('yellow')) {grid26.classList.remove('yellow')}
        if(grid26.classList.contains('purple')) {grid26.classList.remove('purple')}
        grid26.classList.add('yellow')
    }
    if(num === 27) {
        if(grid27.classList.contains('yellow')) {grid27.classList.remove('yellow')}
        if(grid27.classList.contains('purple')) {grid27.classList.remove('purple')}
        grid27.classList.add('yellow')
    }
    if(num === 28) {
        if(grid28.classList.contains('yellow')) {grid28.classList.remove('yellow')}
        if(grid28.classList.contains('purple')) {grid28.classList.remove('purple')}
        grid28.classList.add('yellow')
    }
};

function removeColoredBags() {
    if(grid1.classList.contains('purple')) {
        grid1.classList.remove('purple')
    }
    if(grid1.classList.contains('yellow')) {
        grid1.classList.remove('yellow')
    }
    if(grid2.classList.contains('purple')) {
        grid2.classList.remove('purple')
    }
    if(grid2.classList.contains('yellow')) {
        grid2.classList.remove('yellow')
    }
    if(grid3.classList.contains('purple')) {
        grid3.classList.remove('purple')
    }
    if(grid3.classList.contains('yellow')) {
        grid3.classList.remove('yellow')
    }
    if(grid4.classList.contains('purple')) {
        grid4.classList.remove('purple')
    }
    if(grid4.classList.contains('yellow')) {
        grid4.classList.remove('yellow')
    }
    if(grid5.classList.contains('purple')) {
        grid5.classList.remove('purple')
    }
    if(grid5.classList.contains('yellow')) {
        grid5.classList.remove('yellow')
    }
    if(grid6.classList.contains('purple')) {
        grid6.classList.remove('purple')
    }
    if(grid6.classList.contains('yellow')) {
        grid6.classList.remove('yellow')
    }
    if(grid7.classList.contains('purple')) {
        grid7.classList.remove('purple')
    }
    if(grid7.classList.contains('yellow')) {
        grid7.classList.remove('yellow')
    }
    if(grid8.classList.contains('purple')) {
        grid8.classList.remove('purple')
    }
    if(grid8.classList.contains('yellow')) {
        grid8.classList.remove('yellow')
    }
    if(grid9.classList.contains('purple')) {
        grid9.classList.remove('purple')
    }
    if(grid9.classList.contains('yellow')) {
        grid9.classList.remove('yellow')
    }
    if(grid10.classList.contains('purple')) {
        grid10.classList.remove('purple')
    }
    if(grid10.classList.contains('yellow')) {
        grid10.classList.remove('yellow')
    }
    if(grid11.classList.contains('purple')) {
        grid11.classList.remove('purple')
    }
    if(grid11.classList.contains('yellow')) {
        grid11.classList.remove('yellow')
    }
    if(grid12.classList.contains('purple')) {
        grid12.classList.remove('purple')
    }
    if(grid12.classList.contains('yellow')) {
        grid12.classList.remove('yellow')
    }
    if(grid13.classList.contains('purple')) {
        grid13.classList.remove('purple')
    }
    if(grid13.classList.contains('yellow')) {
        grid13.classList.remove('yellow')
    }
    if(grid14.classList.contains('purple')) {
        grid14.classList.remove('purple')
    }
    if(grid14.classList.contains('yellow')) {
        grid14.classList.remove('yellow')
    }
    if(grid15.classList.contains('purple')) {
        grid15.classList.remove('purple')
    }
    if(grid15.classList.contains('yellow')) {
        grid15.classList.remove('yellow')
    }
    if(grid16.classList.contains('purple')) {
        grid16.classList.remove('purple')
    }
    if(grid16.classList.contains('yellow')) {
        grid16.classList.remove('yellow')
    }
    if(grid17.classList.contains('purple')) {
        grid17.classList.remove('purple')
    }
    if(grid17.classList.contains('yellow')) {
        grid17.classList.remove('yellow')
    }
    if(grid18.classList.contains('purple')) {
        grid18.classList.remove('purple')
    }
    if(grid18.classList.contains('yellow')) {
        grid18.classList.remove('yellow')
    }
    if(grid19.classList.contains('purple')) {
        grid19.classList.remove('purple')
    }
    if(grid19.classList.contains('yellow')) {
        grid19.classList.remove('yellow')
    }
    if(grid20.classList.contains('purple')) {
        grid20.classList.remove('purple')
    }
    if(grid20.classList.contains('yellow')) {
        grid20.classList.remove('yellow')
    }
    if(grid21.classList.contains('purple')) {
        grid21.classList.remove('purple')
    }
    if(grid21.classList.contains('yellow')) {
        grid21.classList.remove('yellow')
    }
    if(grid22.classList.contains('purple')) {
        grid22.classList.remove('purple')
    }
    if(grid22.classList.contains('yellow')) {
        grid22.classList.remove('yellow')
    }
    if(grid23.classList.contains('purple')) {
        grid23.classList.remove('purple')
    }
    if(grid23.classList.contains('yellow')) {
        grid23.classList.remove('yellow')
    }
    if(grid24.classList.contains('purple')) {
        grid24.classList.remove('purple')
    }
    if(grid24.classList.contains('yellow')) {
        grid24.classList.remove('yellow')
    }
    if(grid25.classList.contains('purple')) {
        grid25.classList.remove('purple')
    }
    if(grid25.classList.contains('yellow')) {
        grid25.classList.remove('yellow')
    }
    if(grid26.classList.contains('purple')) {
        grid26.classList.remove('purple')
    }
    if(grid26.classList.contains('yellow')) {
        grid26.classList.remove('yellow')
    }
    if(grid27.classList.contains('purple')) {
        grid27.classList.remove('purple')
    }
    if(grid27.classList.contains('yellow')) {
        grid27.classList.remove('yellow')
    }
    if(grid28.classList.contains('purple')) {
        grid28.classList.remove('purple')
    }
    if(grid28.classList.contains('yellow')) {
        grid28.classList.remove('yellow')
    }
};

function countBoardColoredBags() {
    let yellowBagTotal = 0;
    let purpleBagTotal = 0;
    if(grid1.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid1.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid2.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid2.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid3.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid3.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid4.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid4.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid5.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid5.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid6.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid6.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid7.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid7.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid8.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid8.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid9.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid9.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid10.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid10.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid11.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid11.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid12.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid12.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid13.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid13.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid14.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid14.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid15.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid15.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid16.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid16.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid17.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid17.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid18.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid18.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid19.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid19.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid20.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid20.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid21.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid21.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid22.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid22.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid23.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid23.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid24.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid24.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid25.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid25.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid26.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid26.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid27.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid27.classList.contains('yellow')) {
        yellowBagTotal++
    }
    if(grid28.classList.contains('purple')) {
        purpleBagTotal++
    }
    if(grid28.classList.contains('yellow')) {
        yellowBagTotal++
    }
    playerOneCurrentRoundScoreOnePointer = purpleBagTotal;
    computerCurrentRoundScoreOnePointer = yellowBagTotal;
};

let grid1 = document.querySelector('#grid-item-1');
let grid2 = document.querySelector('.grid-item-2');
let grid3 = document.querySelector('.grid-item-3');
let grid4 = document.querySelector('.grid-item-4');
let grid5 = document.querySelector('.grid-item-5');
let grid6 = document.querySelector('.grid-item-6');
let grid7 = document.querySelector('.grid-item-7');
let grid8 = document.querySelector('.grid-item-8');
let grid9 = document.querySelector('.grid-item-9');
let grid10 = document.querySelector('.grid-item-10');
let grid11 = document.querySelector('.grid-item-11');
let grid12 = document.querySelector('.grid-item-12');
let grid13 = document.querySelector('.grid-item-13');
let grid14 = document.querySelector('.grid-item-14');
let grid15 = document.querySelector('.grid-item-15');
let grid16 = document.querySelector('.grid-item-16');
let grid17 = document.querySelector('.grid-item-17');
let grid18 = document.querySelector('.grid-item-18');
let grid19 = document.querySelector('.grid-item-19');
let grid20 = document.querySelector('.grid-item-20');
let grid21 = document.querySelector('.grid-item-21');
let grid22 = document.querySelector('.grid-item-22');
let grid23 = document.querySelector('.grid-item-23');
let grid24 = document.querySelector('.grid-item-24');
let grid25 = document.querySelector('.grid-item-25');
let grid26 = document.querySelector('.grid-item-26');
let grid27 = document.querySelector('.grid-item-27');
let grid28 = document.querySelector('.grid-item-28');

/////////////////////////////////////////////
// DOM ELEMENTS
/////////////////////////////////////////////

let startButton = document.querySelector('.button-24');
let startingElements = document.querySelector('.load-game');
let gameElements = document.querySelector('.play-game');
let playGameElements = document.querySelector('.start-game');

startButton.addEventListener('click', (evt) => {
    startingElements.classList.add('hidden');
    gameElements.classList.remove('hidden');

    let onePlayerEasy = document.querySelector('.one-easy');
    let onePlayerMedium = document.querySelector('.one-medium');
    let onePlayerHard = document.querySelector('.one-hard');
    let twoPlayerEasy = document.querySelector('.two-easy');
    let twoPlayerMedium = document.querySelector('.two-medium');
    let twoPlayerHard = document.querySelector('.two-hard');

    let col_1_5 = document.querySelector('#col-1-5');
    let col_2_5 = document.querySelector('#col-2-5');
    let col_3_5 = document.querySelector('#col-3-5');
    let col_4_5 = document.querySelector('#col-4-5');
    let col_5_5 = document.querySelector('#col-5-5');
    let movingDiv = document.querySelector('#movingDiv');

    onePlayerEasy.addEventListener('click', (evt) => {
        difficulty = 'easy';
        gameElements.classList.add('hidden');
        playGameElements.classList.remove('hidden');
        col_1_5.classList.add('col-1-5-easy');
        col_2_5.classList.add('col-2-5-easy');
        col_3_5.classList.add('col-3-5-easy');
        col_4_5.classList.add('col-4-5-easy');
        col_5_5.classList.add('col-5-5-easy');
        movingDiv.classList.add('movingDivEasy');
    });
    onePlayerMedium.addEventListener('click', (evt) => {
        difficulty = 'medium';
        gameElements.classList.add('hidden');
        playGameElements.classList.remove('hidden');
        col_1_5.classList.add('col-1-5-medium');
        col_2_5.classList.add('col-2-5-medium');
        col_3_5.classList.add('col-3-5-medium');
        col_4_5.classList.add('col-4-5-medium');
        col_5_5.classList.add('col-5-5-medium');
        movingDiv.classList.add('movingDivMedium');
    });
    onePlayerHard.addEventListener('click', (evt) => {
        difficulty = 'hard';
        gameElements.classList.add('hidden');
        playGameElements.classList.remove('hidden');
        col_1_5.classList.add('col-1-5-hard');
        col_2_5.classList.add('col-2-5-hard');
        col_3_5.classList.add('col-3-5-hard');
        col_4_5.classList.add('col-4-5-hard');
        col_5_5.classList.add('col-5-5-hard');
        movingDiv.classList.add('movingDivHard');
    });
    twoPlayerEasy.addEventListener('click', (evt) => {
        difficulty = 'easy';
        gameElements.classList.add('hidden');
        playGameElements.classList.remove('hidden');
        col_1_5.classList.add('col-1-5-easy');
        col_2_5.classList.add('col-2-5-easy');
        col_3_5.classList.add('col-3-5-easy');
        col_4_5.classList.add('col-4-5-easy');
        col_5_5.classList.add('col-5-5-easy');
        movingDiv.classList.add('movingDivEasy');
    });
    twoPlayerMedium.addEventListener('click', (evt) => {
        difficulty = 'medium';
        gameElements.classList.add('hidden');
        playGameElements.classList.remove('hidden');
        col_1_5.classList.add('col-1-5-medium');
        col_2_5.classList.add('col-2-5-medium');
        col_3_5.classList.add('col-3-5-medium');
        col_4_5.classList.add('col-4-5-medium');
        col_5_5.classList.add('col-5-5-medium');
        movingDiv.classList.add('movingDivMedium')
    });
    twoPlayerHard.addEventListener('click', (evt) => {
        difficulty = 'hard';
        gameElements.classList.add('hidden');
        playGameElements.classList.remove('hidden');
        col_1_5.classList.add('col-1-5-hard');
        col_2_5.classList.add('col-2-5-hard');
        col_3_5.classList.add('col-3-5-hard');
        col_4_5.classList.add('col-4-5-hard');
        col_5_5.classList.add('col-5-5-hard');
        movingDiv.classList.add('movingDivHard');
    });
});

let onePointShotElement = document.querySelector('#one-point-shot');
let threePointShotElement = document.querySelector('#three-point-shot');
let discardBagElement = document.querySelector('#discard-bag');
let computerThrowElement = document.querySelector('#computer-throw');
let playerButtons = document.querySelector('.player-buttons');
let computerButtons = document.querySelector('.computer-buttons');
let possessionMeter = document.querySelector('#possession-meter')

onePointShotElement.addEventListener('click', (evt) => {
    onePointShot = true;
    threePointShot = false;
});

threePointShotElement.addEventListener('click', (evt) => {
    onePointShot = false;
    threePointShot = true;
});

/////////////////////////////////////////////
// CLASSES
/////////////////////////////////////////////


class Player {
    constructor(name,bags) {
        this.name = name;
        this.bags = bags;
    }
    refillBags() {
        this.bags = [1,2,3,4]
    }
    removeBag() {
        this.bags.shift()
    }
};

class Opponent {
    constructor(name,bags,onePointAccuracy,threePointAccuracy) {
        this.name = name;
        this.bags = bags;
        this.onePointAccuracy = onePointAccuracy;
        this.threePointAccuracy = threePointAccuracy;
    }
    refillBags() {
        this.bags = [1,2,3,4]
    }
    removeBag() {
        this.bags.shift()
    }
};

const playerOneGame = new Player('Tom Gugliotta',[1,2,3,4])
const computerOneGame = new Opponent('Dunking Dutchman',[1,2,3,4])

let gameScoreDOM = document.querySelector('#game-score');
let playerRoundScoreDOM = document.querySelector('#player-round-score');
let computerRoundScoreDOM = document.querySelector('#computer-round-score');
let playerBags = document.querySelector('#player-bags');
let computerBags = document.querySelector('#computer-bags');
let resetButton = document.querySelector('.reset-button');
let playerDiscardBag = document.querySelector('#discard-bag')

// I used this code to build my shot meter http://jsfiddle.net/d26cpdfk/5/

let throwBag = document.getElementById('clickableDiv');
let movingDiv = document.getElementById('movingDiv');

playerDiscardBag.addEventListener('click', (evt) => {
    playerOneGame.removeBag();
    displayPlayerBags();
    hidePlayerElements();
    unhideComputerElements();
})

throwBag.addEventListener('click', function(){
    playerOneGame.removeBag();
    let currPos = movingDiv.getBoundingClientRect().x;

    if(difficulty === `easy` && onePointShot === true) {
        if(currPos >= 200 && currPos <= 800) {
            addPurpleBag();
            displayPlayerBags();
        } else {
            console.log(`You missed!!!`)
            displayPlayerBags();
        }
    }

    if(difficulty === `easy` && threePointShot === true) {
        if(currPos >= 400 && currPos <= 600) {
            playerOneCurrentRoundScore = playerOneCurrentRoundScore + 3
            playerOneCurrentRoundScoreThreePointer++
            displayPlayerScoreRound3PT();
            displayPlayerBags();
        } else {
            console.log(`You missed!!!`)
            displayPlayerBags();
        }
    }

    if(difficulty === `medium` && onePointShot === true) {
        if(currPos >= 250 && currPos <= 750) {
            addPurpleBag();
            displayPlayerBags();
        } else {
            console.log(`You missed!!!`)
            displayPlayerBags();
        }
    }

    if(difficulty === `medium` && threePointShot === true) {
        if(currPos >= 450 && currPos <= 550) {
            playerOneCurrentRoundScore = playerOneCurrentRoundScore + 3
            playerOneCurrentRoundScoreThreePointer++
            displayPlayerScoreRound3PT();
            displayPlayerBags();
        } else {
            console.log(`You missed!!!`)
            displayPlayerBags();
        }
    }

    if(difficulty === `hard` && onePointShot === true) {
        if(currPos >= 300 && currPos <= 700) {
            addPurpleBag();
            displayPlayerBags();
        } else {
            console.log(`You missed!!!`)
            displayPlayerBags();
        }
    }

    if(difficulty === `hard` && threePointShot === true) {
        if(currPos >= 460 && currPos <= 540) {
            playerOneCurrentRoundScore = playerOneCurrentRoundScore + 3
            playerOneCurrentRoundScoreThreePointer++
            displayPlayerScoreRound3PT();
            displayPlayerBags();
        } else {
            console.log(`You missed!!!`)
            displayPlayerBags();
        }
    }

    if(playerOneGame.bags.length === 0 && computerOneGame.bags.length === 1 && playerOneScore !== 21 && computerScore !== 21) {
        hidePlayerElements();
        unhideComputerElements();
    }

    if(playerOneGame.bags.length !== 0 && computerOneGame.bags.length !== 0 && playerOneScore !== 21 && computerScore !== 21) {
        hidePlayerElements();
        unhideComputerElements();
    }

    if(playerOneGame.bags.length === 0 && computerOneGame.bags.length === 0 && playerOneScore !== 21 && computerScore !== 21) {
        clearBoard();
    }

    // roundScoreDOM.innerHTML = `Current Round: ${playerOneGame.name} has ${playerOneCurrentRoundScore} points and The ${computerOneGame.name} has ${computerCurrentRoundScore} points`;
    // playerButtons.classList.add('hidden');
    // throwBag.classList.add('hidden');
    // computerButtons.classList.remove('hidden');
  
}, false);

computerButtons.addEventListener('click', (evt) => {
    computerOneGame.removeBag();
    addYellowBag();
    displayComputerBags();

    if(playerOneGame.bags.length === 1 && computerOneGame.bags.length === 0 && playerOneScore !== 21 && computerScore !== 21) {
        hideComputerElements();
        unhidePlayerElements();
    }

    if(playerOneGame.bags.length !== 0 && computerOneGame.bags.length !== 0 && playerOneScore !== 21 && computerScore !== 21) {
        hideComputerElements();
        unhidePlayerElements();
    }

    if(playerOneGame.bags.length === 0 && computerOneGame.bags.length === 0 && playerOneScore !== 21 && computerScore !== 21) {
        clearBoard();
    }

});

resetButton.addEventListener('click', (evt) => {
    countBoardColoredBags()
    playerOneCurrentRoundScore += playerOneCurrentRoundScoreOnePointer
    computerCurrentRoundScore += computerCurrentRoundScoreOnePointer
    if(playerOneCurrentRoundScore > computerCurrentRoundScore) {
        playerOneScore += (playerOneCurrentRoundScore - computerCurrentRoundScore);
        roundWinner = true;
    };

    if(playerOneCurrentRoundScore < computerCurrentRoundScore) {
        computerScore += (computerCurrentRoundScore - playerOneCurrentRoundScore);
        roundWinner = false;
    };

    if(playerOneScore < 21 && computerScore >= 21) {
        window.alert(`Sorry ${playerOneGame.name}, you lost to The ${computerOneGame.name} by a score of ${playerOneScore} to ${computerScore}`);
        location.reload();
    };

    if(playerOneScore >= 21 && computerScore < 21) {
        window.alert(`Congratulations ${playerOneGame.name}, you beat The ${computerOneGame.name} by a score of ${playerOneScore} to ${computerScore}`);
        location.reload();
    };

    if(playerOneScore >= 21 && computerScore >= 21) {
        window.alert(`Congratulations ${playerOneGame.name} and The ${computerOneGame.name}...we are going to Overtime`);
        playerOneGame.refillBags();
        computerOneGame.refillBags();
        playerBags.innerHTML = `Player Bags: ${playerOneGame.bags.length}`;
        computerBags.innerHTML = `Computer Bags: ${computerOneGame.bags.length}`;
        playerRoundScoreDOM.innerHTML = `Player Round 3PT Made: 0`
        computerRoundScoreDOM.innerHTML = `Computer Round 3PT Made: 0`;
        computerScore = 15;
        playerOneScore = 15;
        playerOneCurrentRoundScore = 0;
        computerCurrentRoundScore = 0;
        playerOneCurrentRoundScoreThreePointer = 0;
        computerCurrentRoundScoreThreePointer = 0;
        playerOneCurrentRoundScoreOnePointer = 0;
        computerCurrentRoundScoreOnePointer = 0;
        displayGameScore();
        removeColoredBags();
        resetButton.classList.add('hidden');
    };

    if(roundWinner) {
        unhidePlayerElements();
        possessionMeter.innerHTML = `Possession: ${playerOneGame.name}`
    } else {
        possessionMeter.innerHTML = `Possession: The ${computerOneGame.name}`
        unhideComputerElements();
    }

    playerOneGame.refillBags();
    computerOneGame.refillBags();
    playerBags.innerHTML = `Player Bags: ${playerOneGame.bags.length}`;
    computerBags.innerHTML = `Computer Bags: ${computerOneGame.bags.length}`;
    playerRoundScoreDOM.innerHTML = `Player Round 3PT Made: 0`
    computerRoundScoreDOM.innerHTML = `Computer Round 3PT Made: 0`;
    playerOneCurrentRoundScore = 0;
    computerCurrentRoundScore = 0;
    playerOneCurrentRoundScoreThreePointer = 0;
    computerCurrentRoundScoreThreePointer = 0;
    playerOneCurrentRoundScoreOnePointer = 0;
    computerCurrentRoundScoreOnePointer = 0;
    displayGameScore();
    removeColoredBags();
    resetButton.classList.add('hidden');

});