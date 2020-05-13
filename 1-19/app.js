// Фунции высшего порядка. CallBack

// function foo() {
//   console.log("Hello");
// }

// foo();

// foo.field = "denis";

// console.log(foo);

// const arr = ["denis", "Ivan", "Maks", "Olga"];
// [5, 4, 4, 4];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }

// console.log(newArr);

const names = ["denis", "Ivan", "Maks", "Olga"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameToUpperCase(el) {
  return el.toUpperCase();
}

function nameLength(el) {
  //  console.log(el);
  return el;
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);
//console.log(result2);

function greeting(firstname) {
  return function (lastName) {
    return `Hello ${firstname} ${lastName}`;
  };
}

// const testGreeting = greeting("Denis");
// const fullName = testGreeting("Kaminskyi");

const fullName = greeting("Denis")("Kaminskyi");
// console.log(fullName);

function question(job) {
  const jobDictionary = {
    developer: "что такое javaScript?`",
    teacher: "какой предмет?",
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}`;
  };
}

const developerQustion = question("developer");
console.log(developerQustion("Denis"));

const teacherQustion = question("teacher");
console.log(teacherQustion("Denis"));

// 1.
console.clear();

function arrayToString(arr, fn) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }
  return `New value: ${res}`;
}

function firsLetterToUpperCase(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(
  arrayToString(["my", "name", "is", "Trinity"], firsLetterToUpperCase)
);

function addValueToElementArray(el) {
  return el + "0,";
}

console.log(arrayToString([10, 20, 30], addValueToElementArray));

function elementObjectToSring(el) {
  return `${el["name"]} is ${el["age"]}, `;
}

console.log(
  arrayToString(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    elementObjectToSring
  )
);

function reverseElemenArray(el) {
  return el.split("").reverse().join("") + ", ";
}

console.log(arrayToString(["abc", "123"], reverseElemenArray));

// 2.

function every(arr, fn) {
  if (!Array.isArray(arr)) {
    return new Error("Не масив!");
  }
  if (typeof fn !== "function") {
    return new Error("Должна быть функция!");
  }
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(
  every([1, 2, 5], function (el) {
    return el < 5;
  })
);
