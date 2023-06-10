const counterValue = document.querySelector('#value');
const descrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let value = 0;
descrementBtn.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
    counterValue.style.color = 'red';
});
incrementBtn.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
   
    counterValue.style.color = 'green';
})
