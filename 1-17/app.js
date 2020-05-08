// Методы масивов
const numArr = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];

let value;

value = numArr.length;

// numArr.length = 100;

value = Array.isArray(numArr);
value = numArr[1];

value = numArr.indexOf(10);
value = numArr.push(20);
value = numArr.pop();
value = numArr.unshift(111);
value = numArr.shift();
value = numArr.slice(0, 2);
value = numArr.splice(1, 2, "asd");
value = numArr.reverse();
value = numArr.concat(1, 2, 3);
value = numArr.join(" ");
value = "Ruslan kaminskyi".split(" ");
console.log(value, numArr);

// 1.
console.clear();
function getArray(num) {
  num = parseInt(num);
  if (!num) {
    return new Error("Error");
  }
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i + 1);
  }
  return arr;
}

console.log(getArray(10));

// 2.
console.clear();

function doubleArray(arr) {
  if (!Array.isArray(arr)) {
    return new Error("Error");
  }
  return arr.concat(arr);
}

console.log(doubleArray([1, 2, 3])); // [1,2,3,1,2,3]

// 3.
console.clear();

function changeCollection() {
  let arr = [];
  let argum = Array.prototype.slice.call(arguments);
  for (const key of argum) {
    if (!Array.isArray(key)) {
      return new Error("Только масив или масивы!!!");
    } else if (key.length <= 1) {
      return new Error("Масив не может быть нулевым");
    }
    arr.push(key.slice(1));
  }
  return arr;
}

console.log(changeCollection([1, 2, 3, 2], ["a", "b", "c"], [1, 2]));

// 4.
console.clear();

const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

function filterUsers(arr, key, value) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return new Error("Должен быть масив!");
  }
  if (!key) {
    return new Error("Не переданно значение!");
  }

  for (const obj of arr) {
    if (!obj.hasOwnProperty(key)) {
      return new Error("Поле ненайдено!");
    }
    if (obj[key] == value) {
      newArr.push(obj);
    }
  }
  return newArr;
}

console.log(filterUsers(users, "age", 36));
