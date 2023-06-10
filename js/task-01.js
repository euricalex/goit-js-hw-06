const listItems = document.querySelectorAll('.item');
console.log('Number of categories: ', listItems.length);


listItems.forEach(element => {
    const titleEl = element.querySelector('h2');
const itemElements = element.querySelectorAll('li');

    console.log('Category: ', titleEl.textContent);
    console.log('Elements: ', itemElements.length)
});

