document.getElementById('menuButton').addEventListener('click', () => {
  const modal = document.getElementById('menuModal');
  modal.classList.remove('modal-inactive');
  modal.classList.add('modal-active');
})

const closeModal = () => {
  const modal = document.getElementById('menuModal');
  modal.classList.remove('modal-active');
  modal.classList.add('modal-inactive');
}