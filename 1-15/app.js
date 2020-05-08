// Введение в функции

function sayHello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}!`);
}

sayHello("ruslan", "kamin");

// 1.
function multiply(..._x) {
  if (!_x.length) {
    return 0;
  }
  let res = 1;
  for (const key of _x) {
    res *= key;
  }
  return res;
}

console.log(multiply(2, 4, 5, 6)); // 240

// 2. Создать функцию, которая возвращает строку перевертышь;
console.clear();

function reverseString(str) {
  str = String(str);
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  console.log(revStr);
}

reverseString("test");
reverseString(""); //''
reverseString(null); //llun
reverseString(undefined); //denifednu
reverseString(); //denifednu

console.log(" ".charCodeAt());

// 3.
console.clear();

function getCodeStringFromText(str) {
  str = String(str);
  let notSpaceStr = "";
  let newStr = "";

  for (const el of str) {
    if (el != " ") {
      notSpaceStr += el.charCodeAt() + " ";
    }
  }

  newStr = notSpaceStr.trim();
  return newStr;
}

getCodeStringFromText("hello");
getCodeStringFromText("123123 45 5 45");
getCodeStringFromText(4521256);
getCodeStringFromText(null);
getCodeStringFromText(undefined);
getCodeStringFromText();

// 4. Угадай рандомное число
console.clear();

function guessTheNumber(num) {
  num = parseInt(num);
  if (!num) {
    return console.log(new Error("Пожалуйста, введите коректное число!"));
  } else if (num <= 0 || num > 10) {
    return console.log(new Error("Пожалуйста, введите число от 0 до 10"));
  }

  const randomNum = Math.floor(Math.random() * 10 + 1);

  if (randomNum === num) {
    return console.log("Вы выиграли!!!");
  } else
    return console.log(
      `Случайно чило = ${randomNum}. Ваше чило = ${num}. Попробуйте еще раз)`
    );
}

guessTheNumber(4);
