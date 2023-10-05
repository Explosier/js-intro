console.clear();

const marks = [10, 2, 8, 4, 6];
let totalSum = 0;
let count = 0;
let i = 0;

while(i < marks.length){
    if(typeof marks[i] === 'number'){
      totalSum += marks[i];
      count++;
      i++;
    }
}

const average = totalSum / count;
console.log(average);