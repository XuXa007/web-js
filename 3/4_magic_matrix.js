function isMagicMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const rowSums = new Array(rows).fill(0);
  const colSums = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      rowSums[i] += matrix[i][j];
      colSums[j] += matrix[i][j];
        console.log(rowSums, colSums, "\n", i, j);
    }
  }

  for (let i = 1; i < rows; i++) {
    if (rowSums[i] !== rowSums[0]) {
      return false;
    }
  }

  for (let j = 1; j < cols; j++) {
    if (colSums[j] !== colSums[0]) {
      return false;
    }
  }
  if (rowSums[0] != colSums[0]){
    return false;
  }
  return true;
}

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix1 = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 1, 1],
];

const matrix = [
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
];

console.log(isMagicMatrix(matrix1));
