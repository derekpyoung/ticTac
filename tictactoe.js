const numberButtons = document.querySelectorAll('[data-cell]')
let circleTurn = true;
var arrX = [];
var arrO = [];
var xWins = false;
var oWins = false;
var winningCombo = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '3', '6']
  ];

function setUpEventListeners(){
  numberButtons.forEach(function(currentNumberButton){
    currentNumberButton.addEventListener('click', () => {
      tictactoe(currentNumberButton);
    })
  })
}

function isMarked(currentNumberButton){
  if(currentNumberButton.innerHTML === "X" || currentNumberButton.innerHTML === "O"){
    return true;
  } else {
    return false;
  }
}

function putAnX(currentNumberButton){
  if(!isMarked(currentNumberButton)){
    currentNumberButton.innerHTML = 'X';
    counter('counter-2');
    arrX.push(currentNumberButton.id);
  }
}

function putAnO(currentNumberButton){
  if(!isMarked(currentNumberButton)){
    currentNumberButton.innerHTML = 'O';
    counter('counter-1');
    arrO.push(currentNumberButton.id);
  }
}

function changePlayer(){
    circleTurn = !circleTurn
}

function counter(poop){
  var counter = document.getElementById(poop).innerHTML++;
}

function tictactoe(clickedCell){
  if(xWins){
    console.log('X has already won');
    return;
  }

  if(isMarked(clickedCell)){
    console.log('poop');
    circleTurn = !circleTurn
  }


  if(oWins){
    console.log('O has already won');
    return;
  } else {
    if (circleTurn){
      putAnO(clickedCell);
    } else {
      putAnX(clickedCell);
    }
    //check winner
      checkWinX();
      checkWinO();
      changePlayer();
  }
}

function checkWinX(){
  for(var i = 0; i < winningCombo.length;i++){
    checkForWinningCombo(winningCombo[i][0],winningCombo[i][1],winningCombo[i][2]);
  }
}

function checkWinO(){
  for(var i = 0; i < winningCombo.length;i++){
    checkForWinningComboO(winningCombo[i][0],winningCombo[i][1],winningCombo[i][2]);
  }
}

function checkForWinningCombo(firstNumber, secondNumber, thirdNumber) {
  var result0 = checkIfArrayContains(firstNumber,arrX)
  var result1 = checkIfArrayContains(secondNumber, arrX)
  var result2 = checkIfArrayContains(thirdNumber, arrX)

  if(result0 && result1 && result2){
    console.log('X Wins!');
    document.getElementById('4').innerHTML = "X WINS!"
    xWins = true;
    console.log(xWins);
  }
}

function checkIfArrayContains(cellNumber,array){
  if(array.includes(cellNumber)){
    return true;
  } else {
    return false;
  }
}

function checkForWinningComboO(firstNumber, secondNumber, thirdNumber) {
  var result0 = checkIfArrayContains(firstNumber,arrO)
  var result1 = checkIfArrayContains(secondNumber,arrO)
  var result2 = checkIfArrayContains(thirdNumber,arrO)

  if(result0 && result1 && result2){
    console.log('O Wins!');
    document.getElementById('4').innerHTML = "O WINS!"
    oWins = true;
    console.log(oWins);
  }
}

setUpEventListeners();
