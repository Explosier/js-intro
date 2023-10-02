/*
FOR - "for" ciklas
bazinis is visu galimu ciklu
*/

console.clear();

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log("FINISH");

// Check if given string ends with a number
function incrementString (string) {
   // Check if given string ends with a number
  if(/\d$/.test(string)){
    const splitString = string.split(/(\d+)\D*$/);
// Check if given number starts with zero/s
    if(splitString[1][0] === "0" && splitString[1].length > 1){
      const splitNumber = splitString[1].split(/(^0+)(?=\d)/);
      if(/\9$/.test(string)){
        return splitString[0]+splitNumber[1].slice(0,-1)+(Number(splitNumber[2])+1);
      } else {
        return splitString[0]+splitNumber[1]+(Number(splitNumber[2])+1);
      }
    } else {
        return splitString[0]+(Number(splitString[1])+1);
    }
  } else {
    return string+1;
  }
}

// Sitas zudikas>>>
//let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

console.log(incrementString("fhdgh0099"));

function arrayMadness(a, b) {
    let resultA = 0;
    let resultB = 0;
    a.forEach(element => {
      resultA += element ** 2;
    });
    b.forEach(element => {
      resultB += element ** 3;
    });
    if(resultA > resultA){
      return true;
    } else {
      return resultB;
    }
  }
  console.log(arrayMadness([4,5,6],[1,2,3]));

  function strCount(str, letter){
    if(str !== "" && letter !== ""){
      const find = new RegExp(letter, 'g');
      const result = str.match(find);
      if(result !== null){
        return result.length;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

// Sitas zudikas>>>
//return str.split(letter).length-1

  console.log(strCount("Hello", "l"));