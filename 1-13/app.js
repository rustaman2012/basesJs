// 1. Записать в виде switch case следующее условие:

// if (a === ‘block’) {

//   console.log(‘block’)

// } else if (a === ‘none’) {

//   console.log(‘none’)

// } else if (a === ‘inline’) {

//   console.log(‘inline’)

// } else {

//   console.log(‘other’)

// }

let a = "inline";

switch (a) {
  case "block":
    console.log(a);
    break;
  case "none":
    console.log(a);
    break;
  case "inline":
    console.log(a);
    break;
  default:
    console.log("other");
}

// 2. Записать данное условие в виде тернарного оператора

// let b = 'hidden';

// if (b === 'hidden') {

//  b = 'visible';

// } else {

//  b = 'hidden';

// }

let b = 'hidden';

b = b === 'hidden' ? 'visible' : 'hidden';

console.log(b);

// 3. Записать данное условие в виде тернарного оператора

// let c = 0;

// if (c === 0) {

//  c = 1;

// } else if (c < 0) {

//  c = 'less then zero';

// } else {

//  c *= 10;

// }
console.clear();

let c = 0;

c = c === 0 ? 1 : c < 0 ? 'less then zero': c *= 10;

console.log(c);