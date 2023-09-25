/*
OBJECT - objektas
*/

console.clear();

// vartotojas: vardas, amzius, ar vedes

// key: value
const jonas = {
    name: "Jonas",
    age: 99,
    isMarried: true
};

console.log(jonas);
console.log(jonas["name"]);
console.log(jonas["age"]);
console.log(jonas["isMarried"]);
console.log(jonas.name);

jonas.age++;
console.log(jonas);