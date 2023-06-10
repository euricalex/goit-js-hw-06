
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
const expectedLength = Number(validationInput.getAttribute('data-length'));
const actualLength = validationInput.value.length;

if (actualLength === expectedLength) {
validationInput.classList.remove('invalid');
validationInput.classList.add('valid');
} else {
validationInput.classList.remove('valid');
validationInput.classList.add('invalid');
}
});
console.log(validationInput);

