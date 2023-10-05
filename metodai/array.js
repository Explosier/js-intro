console.clear();

console.log([10, 2, 8, 4, 6]);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][-1]);
console.log([10, 2, 8, 4, 6].at(-1));

const a1 = [1, 2];
const a2 = [3, 4];
const a1a2= a1.concat(a2, a1);

console.log(a1a2);

console.clear();

const marks = [10, 2, 8, 4, 6];
console.log(marks.includes(10));
console.log(marks.indexOf(8));
console.log(Array.isArray(marks));

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const abcJoin = abc.join();
const abcJoin2 = abc.join('-');
console.log(abcJoin, abcJoin, abcJoin2);

console.clear();

const flowers = ['kardelis'];
console.log(flowers);

flowers.push('roze');
console.log(flowers);

flowers.push('tulpe');
console.log(flowers);

flowers.pop();
console.log(flowers);

flowers.shift();
console.log(flowers);

flowers.unshift('ruta');
console.log(flowers);

console.clear();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers46 = numbers.slice(4, 6);
console.log(numbers46);

console.clear();

//numbers.splice(3);
numbers.splice(3, 2, 11);
console.log(numbers);