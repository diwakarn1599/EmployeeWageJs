"use strict";

//Uc1
const ABSENT = 0;

//genrate random value either 0 or 1
let randomValue = Math.floor(Math.random() *10)%2; 

//check and print the output
console.log(`Random value = ${randomValue}`);
console.log((ABSENT==randomValue)?"Employee is Absent":"Employee is present");