"use strict";

//Uc1
const ABSENT = 0;
const WAGE_PER_HR  = 20;
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const MAX_WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HRS_IN_MONTH = 160;

//genrate random value either 0 or 1
let randomValue = Math.floor(Math.random() *10)%2; 

//check and print the output
console.log(`Uc1 : \nRandom value = ${randomValue}`);
console.log((ABSENT==randomValue)?"Employee is Absent":"Employee is present");


//UC2
debugger;

//function to check  whether emp is present full time or parttime
function getWorkHours()
{
    //Return values 1,2,0
    let checkTimings = Math.floor(Math.random() *10)%3; 
    switch(checkTimings)
    {
        case PART_TIME:
            return PART_TIME_HRS;
        case FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}

//calculate total wage based on partTime or full time
//Uc4
let empHrs = 0;
for(let i=0;i<MAX_WORKING_DAYS_IN_MONTH;i++)
{
    empHrs += getWorkHours();
}

//Uc5
let day=0;
empHrs =0;
while(day++ <MAX_WORKING_DAYS_IN_MONTH && empHrs<=MAX_WORKING_HRS_IN_MONTH)
{
    empHrs += getWorkHours();
}
console.log(`Uc5:\ntotal days = ${day-1}`);
console.log(`total emp hours = ${empHrs}`);
let totalWage = empHrs*WAGE_PER_HR;
console.log(`Total Wage = ${totalWage}`);