console.clear();

console.log('labas'.length);
console.log('\n\'\\'.length);

console.log('labas'[0], 'labas'.at(0));
console.log('labas'[2], 'labas'.at(2));
console.log('labas'[5], 'labas'.at(5));
console.log('labas'[-3], 'labas'.at(-3));

console.clear();

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

const start = 'Abecele: ';

let a3 = start;

for(let i=0; i < abc.length; i++){
    a3 += abc[i];
}

console.log(a3);

const a4 = start.concat(...abc);

console.log(a4);

console.clear();

console.log('labas'.includes('a'));
console.log('labas'.includes('A'));
console.log('Labas rytas'.includes('ab'));

console.log('labas'.indexOf('a', 2));
console.log('labas'.indexOf('A'));
console.log('Labas rytas'.indexOf('ab'));
console.log('Labas, labas, rytas'.indexOf('labas'));

console.log('-------------------------------');

// Naudoti tik : for ir if arba indof
function kiek(tekstas, raide){
    return 0;
}

console.log(kiek('labas', 'a'));

console.clear();

console.log('a'.repeat(6));

console.clear();

const r1 = 'Labas';
const r2 = r1.replace('a', 'x'); // replaceAll keicia viska
console.log(r1, r2);
console.clear();

const kopustas = 'kopustas';
console.log(kopustas.slice(0, -2));

console.clear();

const pvz = 'Labas rytas suraitytas vistos koja parasytas';
console.log(pvz.split(' '));

console.clear();

console.log('Labas'.startsWith('L'));
console.log('Labas'.endsWith('s'));

console.clear();

const tarpai = '          labas   rytas          ';
const beTarpu = tarpai.trim(); // trimStart ir trimEnd
console.log(`"${tarpai}"`);
console.log(`"${beTarpu}"`);

console.clear();

