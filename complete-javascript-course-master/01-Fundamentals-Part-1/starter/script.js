// !!!linking js file!!!
/*
// let js = 'amazing';
// if (js === 'amazing') alert('hello')
// console.log(40 + 8 + 23 + 10)
*/

// !!!values & variables!!!
/*
// console.log('jonas');
// console.log(23);

// let firstName = 'Matilda';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
*/

// LECTURE: Values and Variables
/*
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country(population in millions)
// 2. Log their values to the console

// let country = "Belgium"
// let continent = "Europe"
// let population = "10"

// console.log("country");
// console.log("continent");
// console.log("population");
*/

// !!!Data types!!!
/*
let number_Type = 23;
let string_Type = "vingt-trois";
let boolean_Type = true;
let undefined_Type;
let null_Type = null;

console.log(typeof number_Type);
console.log(typeof string_Type);
console.log(typeof boolean_Type);
console.log(typeof undefined_Type);
console.log(typeof null_Type); //un bug fait que la console nous indique un objet comme type alors que ça devrait etre null tout comme undefined
*/

// !!!String and Template Literals!!!
/*
let firstName = 'jonas';
let job = 'teacher';
let birthYear = 1991;
let year = 2037;

let jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
console.log(jonas);

let jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(jonasNew);
*/

// !!!If statements!!!
/*
let age = 15;
let isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    let yearsLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearsLeft} years`);
}

let birthYear = 2021;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//!!! Type conversion and coercion!!!

// let inputYear = '1991';
// console.log(Number(inputYear) + 18);

//!!! Type coercion!!!
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');

//!!!falsy values undefined, null, NaN!!!
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// let money = 0;
// if (money) {
//     console.log(`Don't spend it all`);
// } else {
//     console.log(`You should get a job!`);
// }

// let height;

// if (height) {
//     console.log("Yay! height is defined");
// } else {
//     console.log(`Height is UNDEFINED`);
// }

//!!! operators !!!

// let age = 18;
// if (age === 18) {
//     console.log(`You just became an adult (strict)`);
// };
// if (age == 18) {
//     console.log(`You just became an adult (loose)`);
// };

// let favourite = Number(prompt(`what's your favourite number`));
// console.log(favourite);

// if (favourite === 23) {
//     console.log('23 Cool!');
// } else if (favourite === 7) {
//     console.log(`7 is also Cool!`);
// } else {
//     console.log(`Number is not 23 or 7`);
// };

//!!!Logical operators!!!

// let hasDriversLicense = true;
// let hasGoodVision = true;

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log(`Sarah is able to drive`);
// // } else {
// //     console.log(`Someone else should drive`);
// // };

// let isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive`);
// } else {
//     console.log(`Someone else should drive`);
// };

//!!! switch statements!!!
// let day = "Monday";

// switch ('Monday') {
//     case 'Monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'Tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log('write code examples');
//         break;
//     case 'Friday':
//         console.log('Record Videos');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Enjoy the weekend');
//         break;

//     default:
//         console.log('Not a valid day');
// }

// if (day === "Monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "Tuesday") {
//     console.log("prepare theory videos");
// } else if (day === "Wednesday" || day === "Thursday") {
//     console.log("write code examples");
// } else if (day === "Friday") {
//     console.log("Record Videos");
// } else if (day === "Saturday" || day === "Sunday") {
//     console.log("Enjoy the weekend");
// } else {
//     console.log("Not a valid day");
// }

/*!!! Ternary Operators !!!*/

// let age = 23;
// age >= 18 ? console.log('I like to drink wine') :
// console.log('I like to drink to water');
// let drink = age >= 18 ? 'Wine' : 'Water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// };
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);