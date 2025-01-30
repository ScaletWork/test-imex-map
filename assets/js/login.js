const loginForm = document.querySelector('#login-form');
const loginBtn = document.querySelector('#login-btn');
const loader = document.querySelector('.loader');
const loadintCard = document.querySelector('.card-body');
const loadintCardHeight = loadintCard.offsetHeight;

console.log(loadintCardHeight);
loginForm.addEventListener('submit', () => {
  loadintCard.style.height = `${loadintCardHeight}px`;
  loginBtn.classList.add('hide');
  loader.classList.add('show');
});
