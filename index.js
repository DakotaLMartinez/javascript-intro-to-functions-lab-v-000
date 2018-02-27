const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

console.log(drivers);

destructivelyAppendDriver("Dakota");

console.log(drivers);