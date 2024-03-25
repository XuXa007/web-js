function res(number, person, day) {
  let price = 0;

  if (person === "Students") {
    if (day === "Sunday") {
      price = 10.46;
    } else if (day === "Saturday") {
      price = 9.8;
    } else if (day == "Friday") {
      price = 8.45;
    }
  } else if (person === "Corporate") {
    if (day === "Sunday") {
      price = 16;
    } else if (day === "Saturday") {
      price = 15.6;
    } else if (day == "Friday") {
      price = 10.9;
    }
  } else if (person === "Regular") {
    if (day === "Sunday") {
      price = 22.5;
    } else if (day === "Saturday") {
      price = 20;
    } else if (day == "Friday") {
      price = 15;
    }
  }

  let dis = 0;
  if (person == "Students" && number >= 30) {
    let r = price * number;
    dis = r - (r * 15) / 100;
    console.log();
  } else if (person == "Corporate" && number >= 100) {
    let r = price * (number - 10);
    dis = r - (r * 15) / 100;
  } else if (person == "Regular" && number >= 10 && number <= 20) {
    let r = price * number;
    dis = r - (r * 5) / 100;
  } else {
    dis = price * number;
  }
  parseFloat(dis);
  console.log(`Total price: ${dis.toFixed(2)}`);
}

// res(30, "Students", "Sunday");
res(40, "Regular", "Saturday");
