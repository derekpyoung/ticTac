const numberButtons = document.querySelectorAll('[data-cell]')
var activePlayer;

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
  button.style.backgroundColor = 'red'
  console.log(button.this.innerHTML);
  //document.querySelector('.player-0').classList.toggle('active');
//  document.querySelector('.player-1').classList.toggle('active');

  //check against winning combos
  })
})
// function nextPlayer() {
//     //Next player
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.add('active');
// }




//
// cellElements.forEach(cell => {
//   cell.addEventListener('click', handleClick, { once: true })
// })
//
// function handleClick(e){
//   const cell = e.target
//   const currentClass = playerTurn ? redClass : blueClass
//   placeColor(cell, currentClass)
// }



// const cellElements = document.querySelectorAll('[data-cell]')
// const redClass = 'playerOne'
// const blueClass = 'playerTwo'
// var playerTurn
//
// YOUTUBE
//
// function placeColor(cell, currentClass){
//   cell.classList.add(currentClass)
// }
//
// function colorChange(){
//   document.getElementsByClassName('[data-cell]').style.color = 'red';
// }
// let btn
// var scores, activePlayer, gamePlaying, btn;
// const winningCombos = [
//   [0,1,2]
//   [3,4,5]
//   [6,7,8]
//   [0,4,8]
//   [2,4,6]
//   [0,3,6]
//   [1,4,7]
//   [2,5,8]
// ];
// document.getElementsById('grid-items').addEventListern('click',pickedGrid()) {
//   if('clicked') {
//     console.log('poop');
//   }
//
// })
//
// function startGame(){
//   scores = 0;
//   activePlayer = 0;
//   gamePlaying = true;
//
//   document.getElementById('score-one').textContent = '0';
//   document.getElementById('score-two').textContent = '0';
// }
// function pickedGrid(activePlayer, btn){
//   if(activePlayer = 0){
//     getElementByClassName('grid-item')
//   }
// }
//
// const numberButtons = document.querySelectorAll('[data-cell]')
// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       console.log('poop');
//
//     })
// })
