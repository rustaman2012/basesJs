
// function getThis() {
//   console.log(this);
// }

// const prod = {
//   name: "intel",
//   price: 100,
//   getPrice: function () {
//     console.log(this.name);
//   },
// };

// prod.getPrice();

// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры: const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
  width: 10,
  height: 10,
  getSquare: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
console.clear();

const price = {
  price: 10,
  discount: "15%",
  getPrice: function () {
    return parseInt(this.price) || "Error";
  },
  getPriceWithDiscount: function () {
    if (!parseInt(this.price) && !parseInt(this.discount)) {
      return "Error";
    }
    return (
      parseInt(this.price) -
      (parseInt(this.price) * parseInt(this.discount)) / 100
    );
  },
};

console.log(price.getPrice()); // 10

console.log(price.getPriceWithDiscount()); // 8.5

// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
console.clear();

const obj = {
  height: 0,
  plusOne: function () {
    return (this.height += 1);
  },
};

// setTimeout(function i() {
//   obj.plusOne();
//   console.log(obj.height);
//   setTimeout(() => {
//     i();
//   }, 1000);
// }, 1000);

obj.plusOne();
console.log(obj.height);

// 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:
console.clear();

const numerator = {
  value: 1,

  double: function () {
    this.value *= 2;
    return this;
  },

  plusOne: function () {
    this.value++;
    return this;
  },

  minusOne: function () {
    this.value--;
    return this;
  },
};

numerator.double().plusOne().plusOne().minusOne();

console.log(numerator.value); // 3

// 5. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
console.clear();

const product = {
  name: "apple",
  price: 10,
  amount: 5,
  getPriceAll() {
    return this.price * this.amount;
  },
};

console.log(product.getPriceAll());

// 6. Создать объект из предыдущей задачи. Создать второй объект,который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, нонельзя создавать новые функции и методы. Для этого“позаимствуйте” метод из предыдущего объекта.

const item = {
  name: "intel",
  price: 20,
  amount: 50,
};

item.getPriceAll = product.getPriceAll;

console.log(item.getPriceAll());

// 7. Даны объект и функция:
console.clear();

let sizes = { width: 5, height: 10 },
  getSquare = function () {
    return this.width * this.height;
  };
console.log(getSquare.call(sizes));

// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

// 8.
console.clear();

let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
