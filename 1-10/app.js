let string = "some test string";
let tempStr;

// 1. Получить первую и последнюю буквы строки
console.log(string.slice(0, 1));
console.log(string.slice(-1));
// 2. Сделать первую и последнюю буквы в верхнем регистре
tempStr = string[0].toUpperCase() + string.slice(1, -1) + string.slice(-1).toUpperCase();
console.log(tempStr);
// 3. Найти положение слова ‘string’ в строке
console.log(string.indexOf('string'));
// 4. Найти положение второго пробела (“вручную” ничего не считать)
console.log(string.indexOf(' ', string.indexOf(' ') + 1));
// 5. Получить строку с 5-го символа длиной 4 буквы
console.log(string.substr(5, 4))
// 6. Получить строку с 5-го по 9-й символы
console.log(string.substring(5, 9))
// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
string = string.slice(0, string.length - 6);
console.log(string)
// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;

string = a + '' + b;
console.log(string);