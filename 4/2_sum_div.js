function subtract1(a, b) {
  return a + b;
}
num1 = 23;
num2 = 6;
num3 = 10;
let res = subtract1(num1, num2) - num3;
console.log(res);

function subtract2(a, b) {
  return function (num3) {
    return a + b - num3;
  };
}

let res2 = subtract2(num1, num2)(num3);
console.log(res2);

function subtract3(a, b) {
  return a + b;
}

let res3 = subtract3(num1, num2)

console.log(res3);