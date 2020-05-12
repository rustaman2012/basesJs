// Методы обьектов, ДЕСТРУКТАРИЗАЦИЯ

// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает
// любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →

// { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }

function returnObj(first, ...other) {
  return {
    first,
    other,
  };
}

// console.log(returnObj("a", "b", "c", "d"));

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ … ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
// const organisation = {

// name: 'Google',

// info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }

// };

// getInfo(organisation); →

// Name: Google

// Partners: Microsoft Facebook

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

function getInfo({
  name = "Unknown",
  info: {
    employees: [employee1, employee2],
    partners: [partner1 = "Unknown", partner2 = "Unknown"],
  },
} = {}) {
  return name !== "Unknown"
    ? console.log(`Name: ${name}\nPartners: ${partner1} ${partner2}`)
    : console.log("Unknown");
}

// getInfo(organisation);
