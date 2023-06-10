const mainList = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach(ingredient => {
  const arraysEl = document.createElement('li');
arraysEl.classList.add('list');
arraysEl.textContent = ingredient;
mainList.appendChild(arraysEl);
});

console.log(mainList)



