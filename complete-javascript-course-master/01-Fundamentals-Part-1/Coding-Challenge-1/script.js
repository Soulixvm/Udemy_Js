// Data 1 true
// let weightMark = 78;
// let weightJhon = 92;
// let heightMark = 1.69;
// let heightJhon = 1.95;
// Data 2 false
let weightMark = 95;
let weightJhon = 85;
let heightMark = 1.88;
let heightJhon = 1.76;
let MarkBmi = bmiCalculation(weightMark, heightMark);
let JhonBmi = bmiCalculation(weightJhon, heightJhon);

let markHigherBM = MarkBmi > JhonBmi;
console.log(markHigherBM, MarkBmi, JhonBmi);

function bmiCalculation(weight, height) {
    return weight / (height ** 2);
}
