function n(ar1, ar2) {
  for (let i = 0; i < ar1.length; i++) {
    if (ar2.includes(ar1[i])) {
      test.push(ar1[i]);
      console.log(ar1[i]);
    }
  }
}
let test = [];
// let arr1 = ["Hey", "hello", 2, 4, "Peter", "e"];
// let arr2 = ["Petar", 10, "hey", 4, "hello", "2"];

let a1 = ["R", "u", "s", "s", "i", "a"];
let a2 = ["R", "u", "t"];
let arr = n(a1, a2);
