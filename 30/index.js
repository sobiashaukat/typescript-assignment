"use strict";
const arr = ['admin', "user1", "user2", "user3", "user4", "user5"];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${arr[i]},Hello [i] thank for logging in again`);
    }
}
