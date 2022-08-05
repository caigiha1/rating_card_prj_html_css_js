const submit_btn = document.querySelector('.btn');
const state_1 = document.querySelector('.rating__state--1');
const state_2 = document.querySelector('.rating__state--2');
const ratings = document.querySelectorAll('.rating__votes__vote');
let stars_score = 4; //default value
const score = document.querySelector('.score');

submit_btn.addEventListener('click', onSubmit);
ratings.forEach((btn) => {
  btn.addEventListener('click', handleRating);
});

function onSubmit() {
  state_1.classList.add('hidden');
  score.textContent = stars_score;
  state_2.classList.remove('hidden');
}

function handleRating(e) {
  stars_score = e.target.textContent;
}
