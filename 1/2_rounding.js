function round(number, ch) {
  if (ch > 15) {
    ch = 15;
  }
  console.log(ch);
  console.log(parseFloat(number.toFixed(ch)));
}
let c = 10.5;
let a = 3.141592673974563784563453453736581;
let b = 30;
round(a, b);
// 15
// 2 вир машины (1 видит 2, а 2 видит 1)