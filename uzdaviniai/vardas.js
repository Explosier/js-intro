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
            return `Klaida: "${simbolis} yra neleistinas simbolis..`;
        }
    }

    return true;
}



console.log(arVardas('Labas'));