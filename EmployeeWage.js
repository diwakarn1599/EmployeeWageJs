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
let totalEmpHrs = 0;
for(let i=0;i<MAX_WORKING_DAYS_IN_MONTH;i++)
{
    totalEmpHrs += getWorkHours();
}
let calculateWage = (empHrs) =>
{
    return empHrs*WAGE_PER_HR;
}
//Uc5
//Uc6 - refactor the code to save daily wage
let day=0;
totalEmpHrs =0;
//Array to store daily wage of employee
let dailyEmpWageArr = new Array();
while(day++ <MAX_WORKING_DAYS_IN_MONTH && totalEmpHrs<=MAX_WORKING_HRS_IN_MONTH)
{
    let empHrs = getWorkHours();
    totalEmpHrs += empHrs;
    dailyEmpWageArr.push(calculateWage(empHrs));

}
console.log("UC6");
console.log("Daily Emp wages");
console.log(dailyEmpWageArr.toString());
console.log(`total days = ${day-1}`);
console.log(`total emp hours = ${totalEmpHrs}`);
let totalWage = calculateWage(totalEmpHrs);
console.log(`Total Wage = ${totalWage}`);


