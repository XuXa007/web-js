function oper(a) {

  for (let i = 0; i < a.length; i++) {
    sum_before += a[i]
    if (a[i] % 2 == 0) {
      a[i] += i;
    } else {
      a[i] -= i;
    }
    sum_after += a[i]
  }
  console.log(a);
  console.log(sum_before);
  console.log(sum_after);
}
let ar = [5, 15, 23, 56, 35];
// let ar = [-5, 11, 3, 0, 2];
sum_before = 0
sum_after = 0
oper(ar);


// просуммировать до и после изменений