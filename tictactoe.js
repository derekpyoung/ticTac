const numberButtons = document.querySelectorAll('[data-cell]')
var player = 'X';
let circleTurn = true;
var arrX = [];
var arrO = [];
var xWins = false;
var winningCombo = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '4', '8'],
    ['2', '4', '6'],
    ['1', '4', '7'],
    ['2', '5', '8']
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
  console.log(arrX);

}

function putAnO(currentNumberButton){
   currentNumberButton.innerHTML = 'O';
   arrO.push(currentNumberButton.id);
   console.log(arrO);

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
  } else {
    if (circleTurn){
      putAnO(clickedCell);
      counterO();
    //  checkWinO();
    } else {
      putAnX(clickedCell);
      counterX();

    }
    //check winner
      checkWinX();
    changePlayer();
  }
}

function checkWinX(){
  console.log("checking if X has a winning combo")
  checkForWinningCombo();
}

function checkForWinningCombo(firstNumber, secondNumber, thirdNumber) {
  console.log("checking 0, 1, and 2 for an X")

  var result0 = checkIfarrXcontains("0")
  console.log(result0);

  var result1 = checkIfarrXcontains("1")
  console.log(result1);

  var result2 = checkIfarrXcontains("2")
  console.log(result2);

  if(result0 && result1 && result2){
    console.log('X Wins!');
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
  // console.log if arrX currently contains cellNumber
  // in this case we are passing in "0" so if you mark an X in the first cell this method should console log true
  // if there is no x in the first cell this method should console log false
}






//     if(winningCombo[0][0] == arrX[0] && winningCombo[0][1] == arrX[1] && winningCombo[0][2] == arrX[2]){
//       console.log("X WIN");
//     } else if(winningCombo[1][0] == arrX[0] && winningCombo[1][1] == arrX[1] && winningCombo[1][2] == arrX[2]){
//       console.log('X WIN');
//     } else if(winningCombo[2][0] == arrX[0] && winningCombo[2][1] == arrX[1] && winningCombo[2][2] == arrX[2]){
//       console.log('X WIN');
//     } else if(winningCombo[3][0] == arrX[0] && winningCombo[3][1] == arrX[1] && winningCombo[3][2] == arrX[2]){
//       console.log('X WIN');
//     } else if(winningCombo[4][0] == arrX[0] && winningCombo[4][1] == arrX[1] && winningCombo[4][2] == arrX[2]){
//       console.log('X WIN');
//     }
// }



// function checkWinX(){
//   arrX.sort(function(a,b){
//     return a - b;
//   })
//   for(var i = 0; i < winningCombo.length; i++){
//     if(arrX[i] = winningCombo[i]){
//     }
//   }
// }

setUpEventListeners();
