function printMatrix(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += n + " ";
    }
    a += row.trim() + "\n";
  }
  console.log(a);
}
let a = "";
// const n = 10;
const numberToPrint = 3;
printMatrix(numberToPrint);
