/* Duodamas tekstas.
Reikia pradzioj ir pabaigoj nebutu tarpu
jei tarp zodziu yra is eiles einanciu daugiau nei vienas tarpas turi likt 1 tarpas
*/

console.clear();

function isvalymas(tekstas) {
    tekstas = tekstas.trim();
    while(tekstas.includes('  ')){
        tekstas = tekstas.replaceAll('  ', ' ');
    }
    return tekstas;
}

const str = '    labas          rytas     tau    ';
const ats = 'labas rytas';

console.log(isvalymas(str), ats);

const str2 = 'ka   tu?   ka vakare?';
const ats2 = 'ka tu? ka vakare?';

console.log(isvalymas(str2), ats2);