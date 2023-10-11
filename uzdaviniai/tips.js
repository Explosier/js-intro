console.clear();

function tip(money){
    let tip = money >= 50 && money <= 300 ? (15/100)*money : (20/100)*money;
    return `Sąskaita buvo ${money}, arbatpinigiai ${tip}, o bendra vertė ${money+tip}`;
}

console.log(tip(275));
console.log(tip(40));
console.log(tip(430));