const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 == 0) ? "não é posivel dividir por zero!" : num1 / num2;

export{sum, sub, mult, div}
