/*
IF - Palyginimo sakinys/salyga

Palyginimo operatoriai:
- visi: >, <, ==, ===, >=, <=, !=, !==
- naudotini: >, <, ===, >=, <=, !==
- nenaudotini: ==, !=

kodo sablonai:
if () {} else if {} else {}
*/
console.clear();

function arLyginis(skaicius) {
    if (skaicius % 2 === 0) {
        return true;
    } else {
        return false;
    }

}
function arDesimtainis(skaicius) {
    if (skaicius % 1 === 0) {
        return true;
    } else {
        return false;
    }

}
function arPozytivus(skaicius) {
    if (skaicius >= 0) {
        return true;
    } else {
        return false;
    }

}

const skaiciai = [0, 4, -4, 3, -3, 3.14, -3.14];

skaiciai.forEach(element => {
        if(element === 0){
            return console.log(element, " irgi yra lyginis skaicius!");
        } else {
            if(arLyginis(element) === true){
                if(arPozytivus(element) === true){
                    return console.log(element, " yra lyginis skaicius"); 
                } else {
                    return console.log(element, " yra neigiamas lyginis skaicius."); 
                }
            } else {
                if(arDesimtainis(element) === false){
                    return console.log(element, " nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.");
                } else {
                    if(arPozytivus(element) === true){
                        return console.log(element, " nera lyginis skaicius."); 
                    } else {
                        return console.log(element, " nera neigiamas lyginis skaicius."); 
                    }
                }
            }
        }
});