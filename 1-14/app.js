//Циклы
// while, do while, for, for of, for in

// let i = 0;

// while(i++ < 10) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let str = "Hello";
let res = "";

for (let i = 0; i < str.length; i++) {
  res += str[i] + "*";
}

console.log(res);
console.clear();

const user = [
  {
    name: "Admin",
    age: 45,
  },
  {
    name: "Ruslan",
    age: 24,
  },
  {
    name: "Oleg",
    age: 30,
  },
];

const userObj = {};

for (let i = 0; user.length > i; i++) {
  userObj[i] = user[i];
}

// console.table(userObj);

// for (let key in userObj) {
//   console.log(parseInt(key) + 1, userObj[key].name);
// }

// for (let value of user) {
//   console.log(value);
// }

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let str1 = "i   am  in  the       easycode      ";
let res1 = "";
let posSpace = 0;
for (let i = 0; i < str1.length; i++) {
  if (str1[i] !== " " && i === 0) {
    res1 += str1[i].toUpperCase();
    continue;
  } else if (str1[i - 1] === " " && str1[i] !== " ") {
    if (res1 == "") {
      res1 += str1[i].toUpperCase();
      continue;
    }
    res1 += " " + str1[i].toUpperCase();
    continue;
  } else if (str1[i] !== " ") {
    res1 += str1[i];
  }
}

console.log(res1);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
console.clear();
let string = "tseb eht ma i";
let reversString = "";
for (let i = string.length - 1; i >= 0; i--) {
  reversString += string[i];
}
console.log(reversString);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
console.clear();

let faktorial = 10;
let result = 1;

for (let i = 1; i <= faktorial; i++) {
  result *= i;
}

console.log(result);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
console.clear();

let str2 = "javaScript is a pretty good language";
let res2 = "";
for (let i = 0; i < str2.length; i++) {
  if (str2[i] !== " " && i === 0) {
    res2 += str2[i].toUpperCase();
    continue;
  } else if (str2[i - 1] === " " && str2[i] !== " ") {
    if (res2 == "") {
      res2 += str2[i].toUpperCase();
      continue;
    }
    res2 += str2[i].toUpperCase();
    continue;
  } else if (str2[i] !== " ") {
    res2 += str2[i];
  }
}
console.log(res2);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
console.clear();

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (item of arr) {
  item % 2 === 0 ? "" : console.log("Нечетное", item);
}

// 6. Дан объект:

let list = {
  name: "denis",

  work: "easycode",

  age: 29,
};

// 6. Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
console.clear();

for (let key in list) {
  if (typeof list[key] === "string") {
    list[key] = list[key].toUpperCase();
  }
}
console.log(list && list.name);
