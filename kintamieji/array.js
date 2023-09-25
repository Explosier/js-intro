/*

ARRAY(MASYVAS)

*/

console.clear();

const empty = [];
console.log(empty)

const grades = [10, 2, 8, 4, 6];
console.log(grades, "contains", grades.length, "numbers");

const students = ["Jonas", "Maryte", "Petras", "Ona", "Tomas"];
console.log(students, "contains", students.length, "students");
console.log(students, "first student is", students[0]);
console.log(students, "last student is", students[students.length - 1]);
let averageGrade = 0;
grades.forEach(element => {
    averageGrade += element;
});
console.log("The average of students grades is: ", averageGrade / grades.length);


let visitedPlaces = ["Jonava", "Kupiškis", "Vilnius", "Telšiai", "Šiauliai"];
let listVPlaces = true;
visitedPlaces.forEach(element => {
    listVPlaces = visitedPlaces+", ";
});
console.log("My visited places are: ", listVPlaces.slice(0,-2));

// Suskaiciuoti pazymiu vidurki ir isvesti kaip sakiny kuris yra suformuotas
// "Studentu pazymiu vidurkis yra 7."

// Masyvas vietovardziu.
// Suformuojat sakiny kurio formatas yra: Mano aplankytos vietos: Vieta1, Viet2, Vieta3.

console.clear();
const colors = ["geltona", "zalia", "raudona"];

colors[1] = "Žalia";

console.log(colors);