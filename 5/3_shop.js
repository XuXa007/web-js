function pos(now, order) {
  for (let i = 0; i < now.length; i += 2) {
    let first = {
      product: now[i],
      quantity: parseInt(now[i + 1], 10),
    };

    resNow.push(first);
 }

  for (let i = 0; i < order.length; i += 2) {
    if (resNow.indexOf(order[i])) {
        console.log(order[i]);
    }
    let second = {
      product: order[i],
      quantity: parseInt(order[i + 1], 10),
    };

    resOrder.push(second);
  }
}

let resNow = [];
let resOrder = [];
let first = {};
let second = {};
let now = [
  "Chips",
  "5",
  "CocaCola",
  "9",
  "Bananas",
  "14",
  "Pasta",
  "4",
  "Beer",
  "2",
];

let order = [
  "Flour",
  "44",
  "Oil",
  "12",
  "Pasta",
  "7",
  "Tomatoes",
  "70",
  "Bananas",
  "30",
];
pos(now, order);
console.log(resNow);
console.log(resOrder);
