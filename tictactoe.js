const numberButtons = document.querySelectorAll('[data-cell]')

function putAnX(){
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
    button.innerHTML = 'X';
    })
  })
}
putAnX();
