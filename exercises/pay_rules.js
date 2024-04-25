"use strict";

var payRate = 12.5;
var hoursWorked = 20;
var grossPay = payRate * hoursWorked;

if (hoursWorked <= 40) {
  grossPay = payRate * hoursWorked;
}
console.log(grossPay);
//////

("use strict");

var payRate = 17.3;
var hoursWorked = 45;
var grossPay = payRate * hoursWorked;

if (hoursWorked <= 40) {
  grossPay = payRate * hoursWorked;
}
console.log(grossPay);

/////

var payRate = 17.3;
var overtimePayRate = 25.95;

var hoursWorked = 45;
var overtimeHours = 5;
var grossPay = payRate * hoursWorked;

if (hoursWorked <= 45) {
  grossPay = payRate * hoursWorked + overtimePayRate * overtimeHours;
}
console.log(grossPay);
