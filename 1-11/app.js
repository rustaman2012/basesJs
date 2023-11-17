const user = {
  firstName: "Ruslan",
  lastName: "Kaminskyi",
  isAdmin: true,
  age: 24,
  email: "kaminskyjj270396@gmail.com",
  "user-address": {
    city: "Kiev",
  },
  skills: ["html", "css", "js"],
};

let value;
let prop = "email";

value = user.firstName;
console.log(value);

value = user["isAdmin"];
console.log(value);

value = user["user-address"];
console.log(value);

value = user["user-address"].city;
console.log(value);

value = user["user-address"]["city"];
console.log(value);

value = user[prop];
console.log(value);

const article = {
  product: "iphone",
};

article.price = 1000;
article.currency = "dollar";
article.details = {};
article.details.model = "";
article.details.color = "";

console.log(article);
console.log(value);
