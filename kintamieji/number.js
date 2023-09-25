/*
NUMBER

Iniciavymo budas:
- const (default)
- let (jei kinta)
- var (niekada)

Matematiniai operatoriai:
+, -, *, ...
*/

const amzius = 99;
let pinigine = 0;
var minusas = -7.56;

const x1 = 1;
const x2 = 2;
const x3 = 3;
const x4 = 4;
const x5 = 5;

//console.log(x5);

const n1 = 7;
const n2 = 5;

const sum = n1+n2;
console.log(sum);

const complex = (2 + 2) * 2;
console.log(complex);

const exp = 2 + 2;
const exp1 = 2 * 2;
const exp2 = 2 ** 2;

console.log(exp, exp1, exp2);

console.log(2 ^ 50);

const begalybe = Infinity;
const minusBegalybe = -Infinity;

const x = 5 / 0;
console.log(x);

// not-a-number = NaN

const n = NaN;
console.log(n, NaN);

const liekana = 7 % 5;
console.log(liekana);

console.clear();

// toliau

let wallet = 0;
console.log("Wallet", wallet);

wallet = wallet + 5;
console.log("Wallet", wallet);

wallet = wallet + 5;
wallet = wallet + 5;
wallet = wallet + 5;
console.log("Wallet", wallet);

wallet = wallet - 2;
console.log("Wallet", wallet);

wallet -= 2;
wallet -= 2;
wallet -= 2;
console.log("Wallet", wallet);

wallet = wallet * 4;
console.log("Wallet", wallet);

wallet += 2;
wallet *= 4;
console.log("Wallet", wallet);

wallet /= 5;
console.log("Wallet", wallet);

wallet = wallet ** 2;
wallet **= 2;
console.log("Wallet", wallet);

wallet /= 10000;
console.log("Wallet", wallet);

wallet %= 10;
console.log("Wallet", wallet);

wallet %= 5;
console.log("Wallet", wallet);

const skaicius = 9;
const daliklis = 2;
const liekana3 = skaicius % daliklis;
console.log(liekana3);
const sveikaDalis = (skaicius - liekana3) / daliklis;
console.log(sveikaDalis);

console.log(sveikaDalis, "*", daliklis, "+", liekana3, "=", skaicius);

//////

console.clear();

let index = 0;
console.log("index:", index);

index += 1;
console.log("index", index);

// Po kintamojo panaudojimo sudetis
index++;
console.log("index", index);

// Pries kintamojo panaudojimo sudetis
++index;
console.log("index", index);

let i = 0;
console.log(i); // 0
console.log(i++); //0 -> 1
console.log(i); // 1
console.log(i++); // 1-> 2
console.log(i); // 2

console.log("------------------");

let i2 = 0;
console.log(++i2);
console.log(++i2);
console.log(++i2);
console.log(++i2);
console.log(++i2);

console.log("------------------");

let m = 0;
console.log(m--); // 0-> -1
console.log(m--); // -1 -> -2
console.log(m--);
console.log(m--);
console.log(m--);

console.log("------------------");

let m2 = 0;
console.log(--m2);
console.log(--m2);
console.log(--m2);
console.log(--m2);
console.log(--m2);
console.log(m2);

//////////////////////////

console.log("------------------");
