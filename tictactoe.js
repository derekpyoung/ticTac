const numberButtons = document.querySelectorAll('[data-cell]')
var player = 'X';
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
  currentNumberButton.innerHTML = 'X';
  arrX.push(currentNumberButton.id);
}

function putAnO(currentNumberButton){
   currentNumberButton.innerHTML = 'O';
   arrO.push(currentNumberButton.id);
}

function changePlayer(){
  circleTurn = !circleTurn
}

function counterO(){
  var counter = document.getElementById('counter-1').innerHTML++;
}

function counterX(){
  var counter = document.getElementById('counter-2').innerHTML++;
}

function tictactoe(clickedCell){
  if(xWins){
    console.log('X has already won');
    return;
  }

  if(isMarked(clickedCell)){
    console.log('poop');
  }

  if(oWins){
    console.log('O has already won');
    return;
  } else {
    if (circleTurn){
      putAnO(clickedCell);
      counterO();

    } else {
      putAnX(clickedCell);
      counterX();
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

function checkForWinningCombo(firstNumber, secondNumber, thirdNumber) {
  var result0 = checkIfarrXcontains(firstNumber)
  var result1 = checkIfarrXcontains(secondNumber)
  var result2 = checkIfarrXcontains(thirdNumber)

  if(result0 && result1 && result2){
    console.log('X Wins!');
    document.getElementById('4').innerHTML = "X WINS!"
    xWins = true;
    console.log(xWins);
  }
}

function checkIfarrXcontains(cellNumber) {
  // write your new code here
  if(arrX.includes(cellNumber)){
    return true;
  } else {
    return false;
  }
}

function checkWinO(){
  for(var i = 0; i < winningCombo.length;i++){
    checkForWinningComboO(winningCombo[i][0],winningCombo[i][1],winningCombo[i][2]);
  }
}

function checkForWinningComboO(firstNumber, secondNumber, thirdNumber) {
  var result0 = checkIfarrOcontains(firstNumber)
  var result1 = checkIfarrOcontains(secondNumber)
  var result2 = checkIfarrOcontains(thirdNumber)

  if(result0 && result1 && result2){
    console.log('O Wins!');
    document.getElementById('4').innerHTML = "O WINS!"
    oWins = true;
    console.log(oWins);
  }
}

function checkIfarrOcontains(cellNumber) {
  if(arrO.includes(cellNumber)){
    return true;
  } else {
    return false;
  }
}

setUpEventListeners();
