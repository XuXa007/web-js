function sortCity(input) {
  for (const a of input) {
    const [city, latitude, longitude] = a.split("|").map((item) => item.trim());
    const latitudeF = parseFloat(latitude).toFixed(2);
    const longitudeF = parseFloat(longitude).toFixed(2);

    const data = {
      town: city,
      latitude: latitudeF,
      longitude: longitudeF,
    };

    res.push(data);
  }
  return res;
}

let res = [];
let input = ["Moscow | 55.7522 | 37.6156", "Beijing | 39.913818 | 116.363625"];
sortCity(input);
res.forEach((o) => console.log(o));
