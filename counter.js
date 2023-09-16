const addCount = document.querySelector('.add-counter');
const lowerCount = document.querySelector('.lower-counter');
const result = document.querySelector('.counter-box');

// Initial set up for numbers to go up and down

let i = 0;

addCount.addEventListener('press', () => {
  result.textContent++;
});

lowerCount.addEventListener('press', () => {
  result.textContent--;
});