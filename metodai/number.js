console.clear();

console.log(isFinite(5));
console.log(isFinite(-5));
console.log(isFinite(-3.14));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));

const a = 7;
if (isFinite(a)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.log(Number.isInteger(5));
console.log(Number.isInteger(3.14));

const b = 7;

if(isFinite(b)) {
    if(Number.isInteger(b)){
        console.log('Sveikasis skaicius');
    } else {
        console.log('Desimtainis skaicius');
    }
} else {
    console.log('Ne normalus skaicius: NaN arba Infinity');
}

console.clear();

console.log(Number.parseInt(false));
console.log(Number.parseInt([]));
console.log(Number.parseInt(''));
console.log(Number.parseInt('penki'));
console.log(Number.parseInt('123'));
console.log(Number.parseInt('asd123'));
console.log(Number.parseInt('123asd'));
console.log(Number.parseInt('123.456'));

console.log('-----------------------------');
console.log(Number.parseFloat(''));
console.log(Number.parseFloat('789'));
console.log(Number.parseFloat('789.101'));

console.clear();

console.log(isNaN());

console.clear();

const kaina = 3.14;
console.log(kaina, '3.14');
console.log(kaina.toFixed());
console.log(kaina.toFixed(0));
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));
console.log(kaina.toFixed(3));
console.log(kaina.toFixed(4));

const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius);
console.log(keistasSkaicius.toFixed(4));
console.log(parseFloat(keistasSkaicius.toFixed(4)));
console.log(+keistasSkaicius.toFixed(4));

const c = 6.99999999999999;
console.log(c.toFixed(5));

const d = 5.6789;
console.log(d.toFixed(5));
console.log(d.toFixed(3));