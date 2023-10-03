console.clear();

/* Duodamas vardas...ar taip bent jau galvojama...
Ka daryti?
- reikia nustatyti, ar dave varda, ar ne?
*/

function arVardas(tekstas){
    if(tekstas[0] !== tekstas[0].toUpperCase()){
        return false;
    }
    if(tekstas.slice(1) !== tekstas.slice(1).toLowerCase()){
        return false;
    }
    const neleistiniSimboliai = '0123456789_,.?!@#$%^& ';
    for(let i=0; i<neleistiniSimboliai.length; i++){
        simbolis = neleistiniSimboliai[i];
        if(tekstas.includes(simbolis)){
            return `Klaida: "${simbolis}" yra neleistinas simbolis..`;
        }
    }

    return true;
}

// Namu darbai
function arVardas2(tekstas){
    if(tekstas[0] !== tekstas[0].toUpperCase()){
        return `Klaida: "${tekstas}" vardas turi prasideti is didziosios raides..`;
    }
    if(tekstas.slice(1) !== tekstas.slice(1).toLowerCase()){
        return `Klaida: "${tekstas}" vardas negali tureti daugiau didziuju raidziu negu pirmoji didzioji raide..`;
    }
    if(tekstas.split(' ').length > 1) {
        return  `Klaida: "${tekstas}" varde negali buti tarpu..`;
    }
    const leistiniSimboliai = 'AaĄąBbCcČčDdEeĘęĖėFfGgHhIiĮįYyJjKkLlMmNnOoPpRrSsŠšTtUuŲųŪūVvZzŽž';
    for(let i=0; i<tekstas.length; i++){
        tekstoSimbolis = tekstas[i];
        if(!leistiniSimboliai.includes(tekstoSimbolis)){
            return `Klaida: Varde "${tekstas}" yra neleistinas simbolis "${tekstoSimbolis}"`;
        }
    }
    return `Vardas: "${tekstas}" yra parasytas gerai..`;
}



console.log(arVardas2('Labas kebabas'));
console.log(arVardas2('labas'));
console.log(arVardas2('LabAS'));
console.log(arVardas2('Laba8'));
console.log(arVardas2('Laba"'));
console.log(arVardas2('Labas'));