/**
 * ICS3 - Mr. J
 * RICH SUMMATIVE TASK 2024-25 S1
 *
 * Description:
 * 
 * Author:
 **/ 


'use strict';

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
    Sleep the code for a certain number of ms
    NOTE: Any function that will use this must be declared with async and
    this sleep function called with "await sleep(x)" where x is a number of ms
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
