function drawProgressBar(number) {
  if (number >= 0 && number <= 100 && number % 10 === 0) {
    const barLength = number / 10;
    const progressBar = Array(barLength).fill("%").join("");
    if (number != 100) {
      console.log(
        `${number}% [${progressBar.padEnd(10, ".")}]` + "\nStill loading..."
      );
    } else {
      console.log("100% Complete! \n" + `[${progressBar}]`);
    }
  } else {
    console.log("Некорректное число");
  }
}

drawProgressBar(100);
