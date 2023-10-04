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
    const minLength = 2;
    const maxLength = 20;
    //const leistiniSimboliai = 'AaĄąBbCcČčDdEeĘęĖėFfGgHhIiĮįYyJjKkLlMmNnOoPpRrSsŠšTtUuŲųŪūVvZzŽžXx';
    const leistiniSimboliai = 'aąbcčdeęėfghiįyjklmnoprsštuųūvzžx';

    if(typeof tekstas !== 'string'){
        return `Klaida: "${tekstas}" yra netinkamas duomenu tipas, privalo buti tekstas..`;
    }

    const pirmaRaide = tekstas[0];
    const likusiosRaides = tekstas.slice(1);

    if(pirmaRaide !== pirmaRaide.toUpperCase()){
        return `Klaida: "${tekstas}" vardas turi prasideti is didziosios raides..`;
    }
    if(likusiosRaides !== likusiosRaides.toLowerCase()){
        return `Klaida: "${tekstas}" vardas negali tureti daugiau didziuju raidziu negu pirmoji didzioji raide..`;
    }
    if(tekstas.split(' ').length > 1) {
        return  `Klaida: "${tekstas}" varde negali buti tarpu..`;
    }
    if(tekstas.length < minLength) {
        return  `Klaida: "${tekstas}" vardas turi buti ilgesnis negu ${minLength} simboliai..`;
    }
    if(tekstas.length > maxLength) {
        return  `Klaida: "${tekstas}" vardas negali buti ilgesnis negu ${maxLength} simboliu..`;
    }
    for(let i=0; i<tekstas.length; i++){
        tekstoSimbolis = tekstas[i].toUpperCase();
        if(!leistiniSimboliai.toUpperCase().includes(tekstoSimbolis)){
            return `Klaida: Varde "${tekstas}" yra neleistinas simbolis "${tekstoSimbolis}"`;
        }
    }
    return `Vardas: "${tekstas}" yra parasytas gerai..`;
}



console.log(arVardas2('Labas kebabas'));
console.log(arVardas2('Labaskebabasabaskebabbabas'));
console.log(arVardas2('labas'));
console.log(arVardas2('LabAS'));
console.log(arVardas2('Laba8'));
console.log(arVardas2('Laba"'));
console.log(arVardas2('Labas'));
console.log(arVardas2('L'));
console.log(arVardas2('9abas'));
console.log(arVardas2('!abas'));
console.log(arVardas2());
console.log(arVardas2(undefined));
console.log(arVardas2(null));
console.log(arVardas2(13));
console.log(arVardas2(NaN));
console.log(arVardas2(Infinity));
console.log(arVardas2(true));
console.log(arVardas2(false));
console.log(arVardas2([]));
console.log(arVardas2({}));
console.log(arVardas2(arVardas2()));
