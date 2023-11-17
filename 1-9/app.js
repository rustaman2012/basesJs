const fistName = "Ruslan";
const lastName = "Kaminsyi";
const age = 25;
const str = "Hello, my name is Ruslan";

let value;

value = fistName + " " + lastName;
console.log(value);
value = value + ", I am " + age;
console.log(value);

value = fistName.length;
console.log(value);

value = fistName[0];
console.log(value);
//Получить последний елемент в строке
value = str.toUpperCase();
console.log(value);

value = str.concat(" ", lastName);
console.log(value);

value = str.indexOf("my");
console.log(value);

value = str.includes("my");
console.log(value);


value = str.slice(0, -5);
console.log(value);

value = str.slice(0, 5);
console.log(value);

value = str.replace("Rus", "Rus");
console.log(value);
