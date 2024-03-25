function action(ar1, num) {
  console.log(ar1.slice(num).concat(ar1.slice(0, num)));
}
let testArr = new Array(5);
// let ar1 = [51, 47, 32, 61, 21];
let ar1 = [32, 21, 61, 1];
let a = 40;
action(ar1, a);
