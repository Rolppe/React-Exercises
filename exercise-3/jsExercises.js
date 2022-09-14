// // EXERCISE 3: JavaScript

// // 3.1

// const greet = () => {
//   console.log("Hello there!");
// };

// const sum = (a, b, c) => {
//   return a + b + c;
// };

// greet();
// console.log(sum(1, 2, 3));

// // 3.2

// const names = ["Lily", "Aurelius", "Peter"];

// function longestName(names) {
//   longest = 0;
//   for (x in names) {
//     if (names[x].length > longest) {
//       longest = names[x].length;
//     }
//   }
//   return longest;
// }

// console.log(longestName(names));

// // 3.3

// const randomGreeting = () => {
//   randomNro = Math.random();
//   console.log(randomNro);
//   randomNro < 0.5 ? console.log("Good morning") : console.log("Good evening");
// };

// randomGreeting();

// // 3.4

// const randomBetween = (a, b) => {
//   min = Math.ceil(a);
//   max = Math.floor(b);
//   randomNro = Math.floor(Math.random() * (max - min) + min);
//   (randomNro % 2 == 0) == 1 ? console.log("Eaven") : console.log("Odd");
//   return randomNro;
// };

// console.log(randomBetween(3, 9));

// // 3.5

// parameters = [1, 7, 4, 8, 9, 3, 6, 8];

// const randomArrayElement = (a) => {
//   max = a.length;
//   randomNro = Math.floor(Math.random() * max);
//   return a[randomNro];
// };

// console.log(randomArrayElement(parameters));

// // 3.6

// const southamericans = ["Pele", "Maradona", "Messi"];
// const europeans = ["Baggio", "Zidane", "Litmanen"];

// footballers = [...southamericans, ...europeans];

// console.log(footballers);

// // 3.7

// array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// [x, y] = array;
// console.log(x, y);

// [x, , y] = array;
// console.log(x, y);

// [, , , , ...rest] = array;
// console.log(rest);

// // 3.8

// const person1 = {
//   name: "Vilja",
//   lastName: "Pelto",
// };

// const person2 = {
//   name: "Miina",
//   lastName: "Kenttä",
// };

// const people = [];
// people.push(person1, person2);
// console.log(
//   people.map(({ name }) => {
//     return "Good evening " + name;
//   })
// );

// // 3.9

// const names2 = ["Vivian", "Jaakko", "Maija"];

// const people2 = names2.map((name) => {
//   return {
//     name: name,
//     age: 30,
//     lastname: "Laitela",
//   };
// });

// console.log(people2[0]);
// console.log(people2[1]);
// console.log(people2[2]);

// 3.10

const fetchData = async () => {
  console.log("Start fetching...");
  await new Promise((r) => setTimeout(r, 2000));
  console.log("Data received!");
};

console.log("Let's get some data from the internet!");

fetchData().then(function (value) {
  console.log("Let's use the data we fetched!");
});
