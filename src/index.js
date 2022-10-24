'use strict'

let body = document.getElementsByTagName('body')[0];
let wrapperMain = document.createElement('div');
const counterMoves = document.createElement('div');
const counterTime = document.createElement('div');
let boardSize = 4;
let boardPlate = document.createElement('div');
let sizesBlock = document.createElement('div');


function createMainPlate (){
    wrapperMain.classList.add ('wrapper');
    body.appendChild(wrapperMain);
    let heading = document.createElement('h1');
    heading.innerHTML = 'Gem Puzzle';
    wrapperMain.appendChild(heading);
}

function createControls() {
    const controlContainer = document.createElement('div');
    controlContainer.classList.add('container-buttons')
    wrapperMain.appendChild(controlContainer);
    let buttonsArr = new Array(4).fill(0).map((el, id) => id + 1);
    let buttonText = ['Shuffle and play', 'Stop', 'Save', 'Results']
    buttonsArr.forEach((el, id) => {
        let button = document.createElement('button');
        button.classList.add('controls');
        controlContainer.appendChild(button);
        button.innerHTML = buttonText[id]
    });
    
}
function createCounterPanel(){
    const counterPanel = document.createElement('div');
    counterPanel.classList.add('counters');
    wrapperMain.appendChild(counterPanel);
    counterMoves.innerHTML = 'Moves:';
    counterTime.innerHTML = 'Time:'
    counterPanel.appendChild(counterMoves);
    counterPanel.appendChild(counterTime);
}
function countMoves() {
    let moves = document.createElement('div');
    counterMoves.appendChild(moves);
}
function countTime() {
    let time = document.createElement('div');
    counterTime.appendChild(time);
}
function createBoardPlate() {
    boardPlate.classList.add('board-plate');
    wrapperMain.appendChild(boardPlate);
}
function createBoard(){
    let numberOfElements = document.getElementsByClassName('game-button');
    function createElementsOfGame (){
        let gameElements = new Array(boardSize * boardSize).fill(0).map((el, id)=> id + 1 );
        gameElements.forEach((el) => {
            let gameButton = document.createElement('button');
            gameButton.classList.add('game-button');
            gameButton.dataset.madrixId = `${el}`;
            gameButton.innerHTML = `${el}`;
            let plateWidth = boardPlate.offsetWidth;
            gameButton.style.width = `${plateWidth /boardSize}px`;
            gameButton.style.height = `${plateWidth /boardSize}px`;
            boardPlate.appendChild(gameButton);
            return gameElements;
    });
}
    if (!numberOfElements.length) {
        createElementsOfGame()
    } else {
        boardPlate.querySelectorAll('*').forEach((el) => el.remove())
        
        
        createElementsOfGame();
    }
}   
function chooseBoardSize(){
    
    sizesBlock.classList.add('sizes')
    wrapperMain.appendChild(sizesBlock);
    const sizesText = ['Other sizes:', '3x3','4x4','5x5','6x6', '7x7'];
    let sizes = new Array (6).fill(0).map((el, id)=> {
        let sizesElem = document.createElement('p');
        sizesElem.classList.add('size')
        sizesElem.innerHTML = sizesText[id];
        sizesBlock.appendChild(sizesElem);
    })
    
    sizesBlock.addEventListener('click',function(e) {
        let sizesOptions = Array.from(document.getElementsByClassName('size'));
        let a = e.target.innerHTML;
        sizesOptions.forEach((elem,id) =>  {
            if (!(elem.innerHTML[2] === e.target.innerHTML[0])) {
                return boardSize = Number(a[0]);
            };
        }); 
        
        } )
        sizesBlock.addEventListener('click',createBoard);
}
let buttonNodes = boardPlate.getElementsByClassName('game-button');
function getButtonNodes () {
    
    sizesBlock.addEventListener('click', function(){
        buttonNodes = boardPlate.getElementsByClassName('game-button');
        
    });
    
}

createMainPlate ()
createControls()
createCounterPanel()
countMoves()
countTime() 
createBoardPlate()
createBoard()
chooseBoardSize()
getButtonNodes ()
function createMatrix(){
    let matrix = [];
    for (let i = 0; i < +boardSize; i++){
        matrix.push([]);
    }
    
    return matrix;
}
/* create matrix for boardSize */
function getMatrix(buttonNodess) {
    if (!buttonNodess){
        buttonNodess = Array.from(buttonNodes).map((el) => Number(el.dataset.madrixId));
    }
    
    let matrix = createMatrix();
    let y = 0;
    let x = 0;

    for (let i = 0; i < buttonNodess.length; i++){
        if (x >= boardSize){
            y++;
            x = 0;
        }
        matrix[y][x] = buttonNodess[i];
        x++;
    }
    return matrix;
}


let matrix = getMatrix();
hideLastElem ();


sizesBlock.addEventListener('click', hideLastElem);
/*create shuffle */
let shuffledArr = shuffleArray();
matrix = getMatrix(shuffledArr);
    setItemPositions(shuffledArr);

    document.getElementsByClassName("controls")[0].addEventListener('click', function () {
        shuffledArr = shuffleArray();
        matrix = getMatrix(shuffledArr);
        setItemPositions(shuffledArr);
    })
    
    function shuffleArray(){
        const flatMatrix = matrix.flat();
        return flatMatrix
            .map(el => ({el, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({el}) => el)
    }
    /* define position */
    setItemPositions(shuffledArr);
    
    function setItemPositions(arr) {
        
        for (let y = 0; y < matrix.length; y++){
            for(let x = 0; x < matrix[y].length; x++){
                let value = matrix[y][x];
                let button = buttonNodes[value - 1]; 
                setButtonPostion(button, x, y);
            }
        }
    }
    
    function setButtonPostion(button, x, y) {
        let plateWidth = boardPlate.offsetWidth;
        let shiftWidth = plateWidth /boardSize;
        
        button.style.transform = `translate3D(${x * shiftWidth}px, ${y * shiftWidth}px, 0)`;
    }
    sizesBlock.addEventListener('click', setItemPositions);
    sizesBlock.addEventListener('click', function (e) {
        matrix = getMatrix();
        shuffledArr = shuffleArray();
        matrix = getMatrix(shuffledArr);
        setItemPositions(shuffledArr);
    });
    function hideLastElem (){
        let buttonNodes = Array.from(document.getElementsByClassName('game-button'));
        buttonNodes.at(-1).style.display = 'none'
    }