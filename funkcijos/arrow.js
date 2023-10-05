console.clear();

const n1 = 7;
const n2 = 5;

function suma(a, b) {
    return a+b;
}
//console.log(suma(n1, n2));
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);

// kintamajam priskirti anonimine fnkcija
const skirtumas = function(a, b) {
    return a - b;
}

console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

// arrow (rodykline) function
const sandauga = (a, b) => {
    return a * b;
}

console.log(`${n1} + ${n2} = ${sandauga(n1, n2)}`);

// arrow (rodykline) function
// jeigu logikos bloke yra tik 1 statement(procedura)
// tai galime nerasyti "{return}"
const dalmuo = (a, b) =>  a / b;
console.log(`${n1} / ${n2} = ${dalmuo(n1, n2)}`);

// arrow function
// jeigu yra tik 1 parametras, galima nerasyti: ()
const kvadratu = a => a ** 2;
console.log(`${n1} ** ${n2} = ${kvadratu(n1, n2)}`);
console.log(`${n1} ** ${n2} = ${kvadratu(n1, n2)}`);
