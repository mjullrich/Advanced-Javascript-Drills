
/* Hoisting 1 - 17 */

var name = "Maryann";
console.log(name);

name = 'Covalence';
var name;
console.log(name);

setName();
function setName() {
    let name = 'Covalence';
    console.log(name);
}

/* Hoisting 18 - 20 */

console.log('I am tired');
let avg = findAvg(2, 2);
function findAvg(a, b) {
    console.log("It is late");
    var answer = (a + b) / 2;
    return answer;
}
console.log(avg);

/* Scoping 1 - 25 */

let fruits = ['apple', 'tomato', 'banana'];
/* let favFruit; */

function printFruits() {
    let favFruit = fruits[2];
    favFruit = fruits[2];
    console.log(fruits[0]);
    printFavFruit();

    function printFavFruit() {
        console.log(favFruit);
        let leastFav = fruits[1];
        console.log(leastFav);
    }
}
printFruits();

myName();
function myName(name) {
    console.log("Hello " + 'Maryann');
}

let alertFunc = function myAlert() {
    alert("I am hungry");
}
alertFunc();