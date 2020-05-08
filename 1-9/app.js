const fistName = 'Ruslan';
const lastName = 'Kaminsyi';
const age = 30;
const str = 'Hello, my name is Ruslan';

let value;

value = fistName + ' ' + lastName;
value = value + ', I am ' + age;

value = fistName.length;
value = fistName[0];
//Получить последний елемент в строке
value = str.toUpperCase();
value = str.concat(' ', lastName)
value = str.indexOf('my');
value = str.includes('my');

value = str.slice(0, -3);
value = str.slice(0, 5);

value = str.replace('Ruslan', 'rus')
console.log(value);