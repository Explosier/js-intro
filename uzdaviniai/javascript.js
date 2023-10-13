/*
    1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). 
        Atspausdinti trumpesnį stringą.
    2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus).
        Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį
        sakinį : "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
    3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
        Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
    4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”. 
        Rezultatą atspausdinti.
    5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
    6. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite
        atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių
        po kablelio.
    7. Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25.
        Raskite ir atspausdinkite vidurinę reikšmę.
    8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
        Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
    9. Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.

*/


console.clear();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const r = '\x1b[31m'; // Red
const g = '\x1b[32m'; // Green
const b = '\x1b[34m'; // Blue
const w = '\x1b[0m'; // White

// 1 Užduotis:
console.log(`${g} 1 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const actorName1 = "Johnny Depp";
const actorName2 = "Tom Cruise";
const shorterName = actorName1.length < actorName2.length ? actorName1 : actorName2;
console.log(`The shorter name is ${r}${shorterName}${w} which is ${r}${shorterName.length-1}${w} characters long (excluding space).."`);

// 2 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 2 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const name = "Tadas";
const lastName = "Valantonis";
const birthYear = 1990;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
console.log(`Aš esu ${r}${name} ${lastName}${w}. Man yra ${r}~ ${age}${w} metai(ų).`);

// 2.1 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 2.1 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const birthDate = "1990-10-18";
const currentDate = new Date();
const realAge = new Date(currentDate - new Date(birthDate)).getFullYear() - 1970;
console.log(`Aš esu ${r}${name} ${lastName}${w}. Man yra ${r}${realAge}${w} metai(ų).`);

// 3 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 3 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const actorName = "Nicolas";
const actorLastName = "Cage";
const lastLettersAN = actorName.slice(-3);
const lastLettersALN = actorLastName.slice(-3);
const lastLettersSUM = lastLettersAN + lastLettersALN;
console.log(`Combined last 3 letters of actors ${r}${actorName} ${actorLastName}${w} name is ${r}${lastLettersSUM}${w}`);

// 4 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 4 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const string = "Once upon a time in hollywood";
const stringNoO = string.replaceAll("O",`${r}*${w}`).replaceAll("o", `${r}*${w}`);
console.log(stringNoO);

// 5 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 5 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const n1 = rand(0, 2);
const n2 = rand(0, 2);
const n3 = rand(0, 2);
const n4 = rand(0, 2);

const allNumArr = [n1, n2, n3, n4];

const countN0 = allNumArr.filter(n => n===0).length;
const countN1 = allNumArr.filter(n => n===1).length;
const countN2 = allNumArr.filter(n => n===2).length;

console.log(`Random numbers: ${r}${allNumArr}${w}\nCount of the random numbers:\n0:${r}${countN0}${w}\n1:${r}${countN1}${w}\n2:${r}${countN2}${w}`);

// 6 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 6 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const num1 = rand(0, 4);
const num2 = rand(0, 4);
const div = num1 > num2 ? num1 / num2 : num2 / num1;

console.log(`Random numbers: ${r}${num1},${num2}${w}\nDivided: ${r}${div.toFixed(2)}${w}`);

// 7 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 7 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const number1 = rand(0, 25);
const number2 = rand(0, 25);
const number3 = rand(0, 25);
let middle = null;

if(number1 > number2 && number1 < number3 || number1 < number2 && number1 > number3){
    middle = number1;
} else
if(number2 > number3 && number2 < number1 || number2 < number3 && number2 > number1){
    middle = number2;
} else
if(number3 > number1 && number3 < number2 || number3 < number1 && number3 > number2){
    middle = number3;
} else {
    middle = "Two or more numbers are EQUAL!";
}

console.log(`Random numbers: ${r}${number1},${number2},${number3}${w}\nMiddle number: ${r}${middle}${w}`);

// 8 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 8 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const firstLettersSUM = actorName[0] + actorLastName[0];
console.log(`Combined first letters of actors ${r}${actorName} ${actorLastName}${w} name is ${r}${firstLettersSUM}${w}`);

// 9 Užduotis:
console.log(`${b}-----------------------------------------${w}`);
console.log(`${g} 9 Užduotis: ${w}`);
console.log(`${b}-----------------------------------------${w}`);

const abc = "abcdefghijklmnopqrstuvwxyz";
const randomAbc = abc[rand(0, abc.length-1)]+abc[rand(0, abc.length-1)]+abc[rand(0, abc.length-1)];

console.log(`3 random letters: ${r}${randomAbc}${w}`);
console.log(`${b}-----------------------------------------${w}`);