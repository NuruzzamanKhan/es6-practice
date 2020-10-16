const person = {
    name : 'Rakib', age : 20, gfName : 'banna', phone : 16120645, address : 'pabna', friends : ["Rubel", "Nabil", "Ibrahim"]
};
const {phone, gfName, address,} = person;
//const gfName = person.gfName;
// const phone = person.phone;

console.log(gfName, phone, address, );
console.log(gfName);
console.log(gfName);

const friends = ['Sakib Khan', 'Sallu Khan', 'Saruk Khan'];
const [chotoFriend, nextFriend, ...restFriend] = friends;
console.log(restFriend);