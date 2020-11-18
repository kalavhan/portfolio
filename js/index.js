document.getElementById('openMenuBtn').addEventListener('click', ()=>{
  document.getElementById('modalMenu').classList.remove('hide');
  document.getElementById('modalMenu').classList.add('modal-menu');
})

var modalButtons = document.getElementsByClassName('close');

for (let i = 0; i < modalButtons.length; i++) {
  const element = modalButtons[i];
  element.addEventListener('click', ()=> {
    document.getElementById('modalMenu').classList.remove('modal-menu');
    document.getElementById('modalMenu').classList.add('hide');
  }) 
}