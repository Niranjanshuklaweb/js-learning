const name = "Niranjan"
const age = 28



// console.log(name + age) // old way of string

//string interpoltion


// console.log(`${name} age is ${age}`);

// string through object

const newName = new String("Niranjan-shukla");

console.log(newName);

// console.log(newName[0]);
// console.log(newName.charAt(1));
// console.log(newName.length);
// console.log(newName.indexOf('l'));


// const newName1 = newName.substring(0, 8)
// console.log(newName1)

const newAnother = newName.slice(2,5)

console.log(newAnother);


