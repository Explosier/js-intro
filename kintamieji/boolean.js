/*
BOOLEAN - logine reiksme

Galimos reiksmes: true / false;

Operacijos:
- && (and) visi turi buti true
- || (or) bent vienas turi buti true
*/

console.clear();

const isAdult = true;
const isRaining = false;

const isSunnyDay = true;
const isNight = false;

console.log(isSunnyDay);
console.log(isNight);

const count = false + false + true + true + true + false + true;
console.log(">>>", count);

const count2 = (false + true + true) * (true + true + true);
console.log(count2);

const a = true && true;
console.log("a:", a);

const b = true || true;
console.log("b:", b);

const c = true || false;
console.log("c:", c);

const d = true && false;
console.log("d:", d);

const e = true && (false || true);
console.log(e);

const f = true && false || true;
console.log(f);