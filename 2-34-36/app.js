const div = document.querySelector('div');
const titles = document.querySelectorAll('h1');
// const h1 = document.getElementsByTagName('h1');
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);

// console.log(div.parentElement);

const link = div.querySelector('.link');
// console.log(link.parentElement);
// console.log(link.closest('.content'));

div.classList.add('article', 'custom');
div.classList.remove('article');
// div.classList.contains('custom');
// div.classList.toggle("toggle")
// console.dir(link);

div.setAttribute('id', 'myId');
// div.removeAttribute("id")
// div.getAttribute("id")
// div.hasAttribute("id")

// div.dataset.myattr

// *Манипуляция DOM
const title = document.querySelector('h1');
// title.innerHTML = '<span>text</span>';
// title.textContent = '<span>new text</span>';
// title.appendChild('<span>appen</span>');
// title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');
// title.insertAdjacentElement

// title.innerHTML += '<span>new text</span>';
// const span = title.querySelector('span');
// console.log(span);
// title.innerHTML += '<span>new text2</span>';
// span.innerHTML = 'asdasd';

// *Создание элемента
const span = document.createElement('span');
span.textContent = 'span created by createElement';
span.classList.add('myClass');
console.log(span);
title.appendChild(span);

// div.appendChild(span);
const fragment = document.createDocumentFragment();
const colors = ['black', 'yellow', 'orange'];
colors.forEach(color => {
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment);

// *Удаление элементов
// title.remove()
// title.parentElement.removeChild(title)
