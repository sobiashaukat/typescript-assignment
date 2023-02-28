"use strict";
const guests = ["Ahmad", "Junaid", "Hassaan"];
console.log(guests[0] + " " + "is not coming.");
guests.splice(0, 1, "Ali");
// for(let  i= 0; i<guests.length;i++){
//     console.log(guests[i]+ " "+ "is coming.");
// }
console.log("We have found a big dinner table");
guests.unshift("Zaid");
// console.log(guests);
guests.splice(2, 0, "Zain");
// console.log(guests);
guests.push("Nomi");
// console.log(guests);
// for(let i=0; i<guests.length;i++){
//     console.log(guests[i]+" "+"please come and have dinner with us");
console.log(guests.length + " " + "people are coming to dinner.");
