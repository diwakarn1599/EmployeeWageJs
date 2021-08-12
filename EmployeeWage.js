"use strict";

//Uc1
const ABSENT = 0;
const WAGE_PER_HR  = 20;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;

//genrate random value either 0 or 1
let randomValue = Math.floor(Math.random() *10)%2; 

//check and print the output
console.log(`Uc1 : \nRandom value = ${randomValue}`);
console.log((ABSENT==randomValue)?"Employee is Absent":"Employee is present");


//UC2
debugger;
let empHrs = 0;
//Return values 1,2,0
let checkTimings = Math.floor(Math.random() *10)%3; 
switch(checkTimings)
{
    case PART_TIME:
        empHrs = PART_TIME_HRS;
        break;
    case FULL_TIME:
        empHrs = FULL_TIME_HRS;
        break;
    default:
        break;
        
}
//calculate total wage based on partTime or full time
let totalWage = empHrs*WAGE_PER_HR;
console.log(`Uc2:\nTotal Wage = ${totalWage}`);