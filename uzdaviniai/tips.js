console.clear();

function tip(money){
    let tip = money >= 50 && money <= 300 ? (15/100)*money : (20/100)*money;
    return `Sąskaita buvo ${money}, arbatpinigiai ${tip}, o bendra vertė ${money+tip}`;
}

console.log(tip(1000));