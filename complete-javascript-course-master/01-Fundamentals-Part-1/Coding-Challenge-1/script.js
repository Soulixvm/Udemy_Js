/*Coding Challenge #1*/
// Data 1 true
// let weightMark = 78;
// let weightJhon = 92;
// let heightMark = 1.69;
// let heightJhon = 1.95;
// Data 2 false
// let weightMark = 95;
// let weightJhon = 85;
// let heightMark = 1.88;
// let heightJhon = 1.76;
// let MarkBmi = bmiCalculation(weightMark, heightMark);
// let JhonBmi = bmiCalculation(weightJhon, heightJhon);

// let markHigherBM = MarkBmi > JhonBmi;
// console.log(markHigherBM, MarkBmi, JhonBmi);

// function bmiCalculation(weight, height) {
//     return weight / (height ** 2);
// }

/*Coding Challenge #2*/

// if (MarkBmi > JhonBmi) {
//     console.log(`Marks BMI ${MarkBmi} is greater than jhons  one ${JhonBmi}`);
// } else {
//     console.log(`Jhons BMI ${JhonBmi} is greater than Marks one ${MarkBmi}`);
// }

/* Coding Challenge #3 */

//data 1
// let dolphinsFirstScore = 96;
// let dolphinsSecondScore = 108;
// let dolphinsThirdScore = 89;
// let koalasFirstScore = 88;
// let koalasSecondScore = 91;
// let koalasThirdScore = 110;
// let dolphinsFirstScore = 400;
// let dolphinsSecondScore = 400;
// let dolphinsThirdScore = 400;
// let koalasFirstScore = 400;
// let koalasSecondScore = 400;
// let koalasThirdScore = 400;

// let dolphinsAvg = AvgScore(dolphinsFirstScore, dolphinsSecondScore, dolphinsThirdScore);
// let koalasAvg = AvgScore(koalasFirstScore, koalasSecondScore, koalasThirdScore);

// function AvgScore(n1, n2, n3) {
//     return (Number(n1) + Number(n2) + Number(n3)) / 3
// }

// //Bonus 1

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log(`Dolphins wins!`);
// } else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
//     console.log(`Koalas Wins!`);
// } else {
//     console.log(`Both Wins!`);
// }

// //Bonus 2

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log(`Dolphins wins!`);
// } else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
//     console.log(`Koalas Wins!`);
// } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
//     console.log(`Both Wins!`);
// } else {
//     console.log(`No Team wins de trophy!`);
// }

/* Coding challenge #4*/
// let bill = 275;
// let bill = 40;
// let bill = 430;

// let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// let totalValue = bill + tip

// console.log(`The bill was ${bill}€, the tip was ${tip}€ and the total cost was ${totalValue}€.`);
