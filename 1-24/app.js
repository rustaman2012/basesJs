// что такое Замыкание

// 1. Создайте функцию которая бы умела делать:

function minus(a = 0) {
  let x = a;
  return function (b = 0) {
    return x - b;
  };
}

// console.log(minus(10)(6)); // 4
// console.log(minus(5)(6)); // -1
// console.log(minus(10)()); // 10
// console.log(minus()(6)); // -6
// console.log(minus()()); // 0

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker(num) {
  let a = num;
  return function (value) {
    return (a *= value);
  };
}
const multiply = multiplyMaker(2);

// console.log(multiply(2), multiply(1), multiply(3), multiply(10));
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
//  i. если передано пустое значение, то установить пустую строку
//  ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const string = (function () {
  let strTemp = "";

  function setString(str = "") {
    strTemp = str + "";
  }

  function getString() {
    return strTemp;
  }

  function getLengthString() {
    return strTemp.length;
  }

  return {
    setString,
    getString,
    getLengthString,
  };
})();

string.setString("Ruslan");
console.log(string.getString(), string.getLengthString());

// 4. создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
