console.clear();

// Pirmas uzdavinys
let markoMase = 78;
let markoUgis = 1.69;
let jonoMase = 92;
let jonoUgis = 1.95;

let markoKMI = markoMase / (markoUgis ** 2);
let jonoKMI = jonoMase / (jonoUgis ** 2);

let markHigherBMI = markoKMI > jonoKMI;

// Antras uzdavinys
if(markHigherBMI){
    console.log(`Marko KMI (${markoKMI}) yra didesnis nei Jono (${jonoKMI})!`);
} else {
    console.log(`Jono KMI (${jonoKMI}) yra didesnis nei Marko (${markoKMI})!`);
}

// Trecias uzdavinys
function kasNugalejo(delfinuBalai, koalosBalai){
    let delfinuVidurkis = delfinuBalai.reduce((a, b) => a + b, 0) / delfinuBalai.length;
    let koalosVidurkis = koalosBalai.reduce((a, b) => a + b, 0) / koalosBalai.length;

    if (delfinuVidurkis > koalosVidurkis && delfinuVidurkis >= 100){
        return "Delfinai laimėjo!";
    } else if (koalosVidurkis > delfinuVidurkis && koalosVidurkis >= 100){
        return "Koalos laimėjo!";
    } else if (delfinuVidurkis === koalosVidurkis && delfinuVidurkis >= 100 && koalosVidurkis >= 100){
        return "Lygiosios!";
    } else {
        return "Nėra nugalėtojo!";
    }
}

console.log(kasNugalejo([96, 108, 89], [88, 91, 110]));
console.log(kasNugalejo([97, 112, 101], [109, 95, 123]));
console.log(kasNugalejo([97, 112, 101], [109, 95, 106]));