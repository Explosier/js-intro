console.clear();

const amzius = 19;
const limitas = 18;

let zinute = '';

// jeigu pilnametis -> Uzeik
// jeigu nepilnametis -> Sorry..

if(amzius < limitas) {
    zinute = "Sorry";
} else {
    zinute = "Uzeik!";
}

console.log('>>>', zinute);

let zinute2 = 'Uzeik!';

if(amzius < limitas) {
    zinute2 = "Sorry";
}

console.log('>>>', zinute2);

const zinute3 = amzius < limitas ? 'Sorry' : 'Uzeik!';

console.log('>>>', zinute3);

const errors = {
    notString: 'Error: first param has to be a string.',
    empty: 'Error: first param has to be non-empty'
};

const firstLetter = str => typeof str !== 'string'
    ? errors.notString
    : str.length === 0
        ? errors.empty
        :str[0];


console.log(firstLetter(""));