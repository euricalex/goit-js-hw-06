function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const colorSpan = document.querySelector('.color');
const changeColor = document.querySelector('.change-color')

changeColor.addEventListener('click', () => {
  const bodyColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyColor;
  colorSpan.textContent = bodyColor;

});
