window.onload = function () {
  var firstNumberInput = document.getElementById("firstNumber");
  var secondNumberInput = document.getElementById("secondNumber");

  firstNumberInput.addEventListener("input", subtract);
  secondNumberInput.addEventListener("input", subtract);
};

function subtract() {
  var firstNumber = parseFloat(document.getElementById("firstNumber").value);
  var secondNumber = parseFloat(document.getElementById("secondNumber").value);

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    var result = firstNumber - secondNumber;
    document.getElementById("result").innerText = result;
  } else {
    document.getElementById("result").innerText = "Invalid input";
  }
}
