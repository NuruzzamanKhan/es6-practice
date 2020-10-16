const ages = [12, 14, 20];
const ages2 = [15, 23, 22];
const ages3 = [23, 24, 53]
const allAges = ages.concat(ages2).concat([4]).concat(ages3);//Old js system for adding all array
const allAges2 =[...ages, ...ages2, 5, ...ages3]//spread  oparator es6 system
console.log(allAges2);

const sum = (x, y, z) => x + y + z;
const numbers = [12, 20, 10]
const result = sum(...numbers);
console.log(result);

const takaPisa = [450, 600, 550];
const maximun = Math.max(...takaPisa);
console.log(maximun);

