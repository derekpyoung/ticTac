const numberButtons = document.querySelectorAll('[data-cell]')
var player = 'X';
let circleTurn = true;

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
}

function putAnO(currentNumberButton){
   currentNumberButton.innerHTML = 'O';
}

function changePlayer(){
  circleTurn = !circleTurn
}

function tictactoe(clickedCell){
  if(isMarked(clickedCell)){
    console.log('poop');
  } else {
    if (circleTurn){
      putAnO(clickedCell);
      changePlayer();
    } else {
      putAnX(clickedCell);
      changePlayer();
    }
  }

}
setUpEventListeners();


//
// function eventListening(){
//   numberButtons.forEach(button => {
//     button.addEventListener('click', () => clickButton(button));
//   })
// }
//eventListening();
