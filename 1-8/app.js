const num1 = 10;
const num2 = 20;

let value;

value = num1 + num2;
// value = 5 % 2;
value++

value = 0.6 + 0.7
value = Math.floor(Math.random() * 10 + 1);

const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
value = Math.floor(Math.random() * arr.length);

console.log(value, '=', arr[value]);
console.clear();
//1. Получить число pi из Math и округлить его до 2-х знаков после точки
console.log(Math.PI.toFixed(2));

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
console.clear();
const arrNum = [5, 11, 16, 12, 51, 12, 13, 51];
console.log(Math.min(...arrNum));
console.log(Math.max(...arrNum));
//3. Работа с Math.random:
//  a. Получить случайное число и округлить его до двух цифр после запятой
console.clear();
const number = Math.random().toFixed(2);
console.log(number);
//  b. Получить случайное целое число от 0 до X. X - любое произвольное число.
console.clear();
let randomValue = (number) => {
  return Math.floor(Math.random() * number + 1);
};
console.log(randomValue(10));

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.clear();
console.log(parseFloat((0.6 + 0.7).toFixed(1)));
//5. Получить число из строки ‘100$’
console.clear();
console.log(parseInt('100$'));