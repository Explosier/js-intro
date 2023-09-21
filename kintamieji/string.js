// Strings

console.clear();

const txt = "tek\"st\\as";

console.log(txt);

const formattedText = "Labas\n \rrytas,\n \rLietuva!\n\r";

console.log(formattedText);

const lrl ="Labas \n\r\
rytas, \n\r\
Lietuva!";
console.log(lrl);

const backtick = `
Labas
rytas,
Lietuva!`;
console.log(backtick);

console.clear();

const name = "Chuck";
const lastName = "Norris";
const fullName = name+" "+lastName;

console.log(fullName, "=", fullName.length-1, "characters without space");

const lrl3 = `Labas rytas, ${fullName}!`;

console.log(lrl3);

console.clear();

const n1 = 5+7;
console.log(n1);

const n2 = 5 + "7";
console.log(n2);

const n3 = "5" + 7;
console.log(n3);

const n4 = "5" + "7";
console.log(n4);

const n5 = 7 - 5;
console.log(n5);

const n6 = "7" - 5;
console.log(n6);

const n7 = 7 - "5";
console.log(n7);

const n8 = "7" - "5";
console.log(n8);

const ll = "labas".length - "l".length;
console.log(ll);