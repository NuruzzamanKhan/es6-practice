// function doubleIt(num){
//     return num * 2;
// }

//function declearation system
// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;//es6 function decleration arroy function
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const result = add(23, 12);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);
console.log(result2);
console.log(result);