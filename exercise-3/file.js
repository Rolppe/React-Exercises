sayHello("reijo");

function sayHello(nimi) {
  console.log("Moi " + nimi + "!");
}

const sayHelloArrow = (nimi) => {
  console.log("Moi " + nimi + "!");
};

sayHelloArrow("tauno");

const names = ["repa", "kipa", "stefa", "juuso", "ville"];
console.log(names[1]);

for (index in names) {
  console.log(names[index]);
}

names.map((name) => console.log("Hello " + name));

console.log(names);
console.log(...names);

console.log("tauno", "juulia", ...names);

[a, b, ...c] = names;
console.log(a);
console.log(b);
console.log(c);

const person = {
  name: "Mikko",
  age: 38,
};

console.log(person.name);

if (person.age == 38) {
  console.log("ikä on 38");
} else {
  console.log("eri ikä");
}

let show = false;

show && console.log("surprise");

4 == 4 ? console.log("true") : console.log("false");
