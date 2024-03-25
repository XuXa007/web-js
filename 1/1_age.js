function determineAgeCategory(age) {
  if (age >= 0 && age <= 2) {
    return "младенец";
  } else if (age >= 3 && age <= 13) {
    return "ребенок";
  } else if (age >= 14 && age <= 19) {
    return "подросток";
  } else if (age >= 20 && age <= 65) {
    return "взрослый";
  } else {
    return "пожилой";
  }
}

let result = determineAgeCategory(20);
console.log(result);
