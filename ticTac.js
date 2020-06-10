const numberButtons = document.querySelectorAll('[data-cell]')
// const winningCombos = [
//   [0,1,2]
//   [3,4,5]
//   [6,7,8]
//   [0,4,8]
//   [2,4,6]
//   [0,3,6]
//   [1,4,7]
//   [2,5,8]];

var activePlayer = 0;
var red = [];
var blue = [];

function colorPicker(){ //changes color for player/switches player

  if(activePlayer == 0){
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
      button.style.backgroundColor = 'red'
      red.push(button.innerHTML);
      return red;
      })


      activePlayer = 1;
      colorPicker(poops);

    });
  }else{
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
      button.style.backgroundColor = 'blue'
      blue.push(button.innerHTML);
      console.log('blue' + blue);
      activePlayer = 0;
      colorPicker(poops);
      })
    });
  }
  return poops;
}
colorPicker(activePlayer);

function redArray(activePlayer){
  if(activePlayer == 0){
    red.push(button.innerHTML);
    console.log(red);
  } else {
    colorPicker();
  }
}
//






//check win
// function checkWin(arr,arr1,winningCombos){
//   var i,j,current;
//   for(i = 0; winningCombos.length)
// }








// function nextPlayer(activePlayer){
//   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//   if(activePlayer === 0){
//     activePlayer = 1;
//   } else {
//     activePlayer = 0;
//   }
// }
// function moveActive(){
//   var id = document.getElementById("player-one-panel-" + activePlayer);
//   console.log(id);
// }

// function poop(){
//   if(activePlayer = 0){
//     document.getElementsByClassName('cell').style.backgroundColor = red;
//     activePlayer = 1;
//   } else {
//     document.getElementsByClassName('cell').style.backgroundColor = blue;
//   }
// }



// function nextPlayer() {
//     //Next player
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
