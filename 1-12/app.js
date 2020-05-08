// <, >, >=, <=, ==, ===, !=, !==

let value;

value = 1 < 2;
value = 1 == 1;
value = 1 == '1';
value = 1 === '1';
value = 'a' > 'A';
value = 'a'.charCodeAt()

// console.log(value);

value = 10;

if (value === 10) {
  console.log(value + ' = 10');
} else {
  console.log(value + ' != 10');
}

// 1. Чему равно а, почему?
console.clear();


let a = 0 || 'string'; // 0 преобразовывается в булевое false, а непустая строка в true

a = 1 && 'string'; // И ищет первое false, если находит возвращает последнюю истину перед false

a = null || 25; // Находит первую истину и возвращает. а null - false

a = null && 25; // И ищет первое false, если находит возвращает последнюю истину перед false

a = null || 0 || 35; // 35

a = null && 0 && 35; // null

console.log(a);

// 2. Что отобразится в консоли. Почему?
console.clear();

let b;

b = 12 + 14 + '12'; // Сначала математические действия, а после встречает строку и конкатенируктся

b = 3 + 2 - '1'; // 4 Все операторы кроме + пытаются преобразовать в число

b = '3' + 2 - 1; // 31 "+" конкатенирует, а - выполняет математическое действие

b = true + 2; // 3 true = 1 + 2 

b = +'10' + 1; // 11 "+" перед строкой преобразовывет ее число, если это возможно, иначе NaN

b = undefined + 2; // NaN

b = null + 5; // 5, null, пустое значение

b = true + undefined; //NaN

console.log(b);

// 3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
console.clear();

let show = 'hidden';

if (show === 'hidden') {
  show = 'visible';
  console.log('Show = ', show);
} else {
  show = 'hidden';
  console.log('Show = ', show);
}

// 4. Создать переменную и присвойте ей число.

// Используя if, записать условие:

// - если переменная равна нулю, присвоить ей 1;

// - если меньше нуля - строку “less then zero”;

// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
console.clear();

let num = 25;

if (!num) {
  num = 1;
} else if (num < 0) {
  num = 'less then zero';
}else if (num > 0) {
  num *= 10;
}

console.log ('num =', num);

// 5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
console.clear();

const letCar = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false
}

if (letCar.age > 5) {
  console.log('Need Repair, age < 5. Age today =', letCar.age);
  letCar.needRepair = true;
}

console.table(letCar);

// 6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }. Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
console.clear();

const item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
}

if (item.hasOwnProperty('discount') && parseInt(item.discount) && item.hasOwnProperty('price') && parseInt(item.price)) {
 item.priceWithDiscount = parseInt(item.price) - parseInt(item.price) * parseInt(item.discount) / 100; 
 console.log(item.priceWithDiscount.toFixed(2) + '$');
} else {
  console.log('bad');
}

// 7. Дан следующий код:
// let product = {
//   name: “Яблоко”,
//   price: “10$”
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
console.clear();

let product = {
    name: 'Яблоко',
    price: '10$'
  };
  
  let min = 10; // минимальная цена
  let max = 20; // максимальная цена

  if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
  } else console.log('Товаров не найдено')