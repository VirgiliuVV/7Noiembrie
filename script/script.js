const nr1 = +prompt("Adauga primul numar");
const nr2 = +prompt("Adauga al doilea numar");

const sum = (nr1, nr2) => nr1 + nr2;

const minus = (nr1, nr2) => nr1 - nr2;

const multiply = (nr1, nr2) => nr1 * nr2;

const divide = (nr1, nr2) => nr1 / nr2;

console.log(sum(nr1, nr2));
console.log(minus(nr1, nr2));
console.log(multiply(nr1, nr2));
console.log(divide(nr1, nr2));