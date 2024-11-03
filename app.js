const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const counter = document.querySelector('.counter');

decrease.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) - 1;
})

reset.addEventListener('click', () => {
    counter.textContent = 0;
})

increase.addEventListener('click', () => {
    counter.textContent = parseInt(counter.textContent) + 1;
})