const hubby = "Elian Kanchon" //Poperty not changeable
// hubby = "Hero Alam"
console.log(hubby);

const numbers = [12, 45];//full array not changable
numbers[1] = 88;
numbers.push(12);
//numbers = [10, 20];
console.log(numbers);

let patientName = "Rahim Chacha";//poperty changeable
patientName = "Fatema Khala";
console.log(patientName);


let sum = 0;//inside scop
for (let i = 0; i <= 10; i++){
    sum = sum + i;
    console.log(i);
}