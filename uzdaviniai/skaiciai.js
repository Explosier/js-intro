console.clear();

const skaiciai = [10, 2, 8, 4, 6];

let vidurkis = 0;

let suma = 0;
for(let i=0; i < skaiciai.length; i++) {
    suma += skaiciai[i];
}

vidurkis = suma / skaiciai.length;

console.log(`Vidurkis: ${vidurkis}`);

// Mediana

let mediana = 0;

skaiciai.sort((a, b) => a - b);

if (skaiciai.length % 2 === 0) {
    mediana = (skaiciai[skaiciai.length / 2 - 1] + skaiciai[skaiciai.length / 2]) / 2;
} else {
    mediana = skaiciai[Math.floor(skaiciai.length / 2)];
}

console.log(`Mediana: ${mediana}`);