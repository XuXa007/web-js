function calcu(num1, operator, num2) {
  if (operator == "+") {
    let sum = num1 + num2;
    console.log(sum.toFixed(2));
  } else if (operator == "-") {
    let sub = num1 - num2;
    console.log(sub.toFixed(2));
  }
}

calcu(25.5, "-", 3);
