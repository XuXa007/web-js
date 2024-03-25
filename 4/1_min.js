function subtract(a, b) {
  if (a>b) {
    return b 
  } else {
    return a
  }
}

const num1 = 1;
const num2 = 1;
const num3 = 3;

const result = subtract(num1, num2);

const res = subtract(result, num3)
console.log(res);
// композиция