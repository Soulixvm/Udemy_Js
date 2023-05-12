/*fundamentals #1*/
/*
/*values and variables*/
let country = 'Belgium',
    continent = 'Europe',
    population = 10;
// console.log(`${country} is in ${continent} and has a population of ${population} millions haibitants`);

/*Data types*/
let isIsland = false;
let language;

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

/*let, const and var */
language = 'English';
isIsland = false;

/*Basic Operators*/
console.log(population / 2);
population++;
let finland = 6;
console.log(population > finland);
console.log(population < 33);

/*String and template literals*/
let description = `${country} is in ${continent}, and its ${population} millions people speak ${language}`;
console.log(description);

/*Taking Decisions: if / else Statements*/
population;
if (population > 33) {
    console.log("Belgium's population is above average");
} else {
    console.log(`Belgium's population average is ${33 - population} million below average`);
}
/*Type Conversion and Coercion*/
'9' - '5'; //number 4
'19' - '13' + '17'; //string 617
'19' - '13' + 17; //number 23
'123' < 57; //boolean false
5 + 6 + '4' + 9 - 4 - 2; // number 1143

/*Equality Operators: == vs. ===*/
// let numNeighbours = Number(prompt(`How many neighbour countries does your country have`))
// if (numNeighbours === 1) {
//     console.log('Only 1 Border');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No Borders');
// }

/* Logical Operators*/
if (language == 'English' && population < 50 && !isIsland) {
    console.log('You should live in Belgium');
} else {
    console.log('Belgium does not meet your criteria');
}

/*The switch statement*/
language = 'english';
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too');
        break;
}

/*The Conditional (Ternary) Operator*/
population;
let populationAvg = population > 33 ? 'above' : 'below';
console.log(`Belgium's population is ${populationAvg} average`);
