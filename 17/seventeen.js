"use strict";
const guests = ["Ahmad", "Junaid", "Hassaan"];
// console.log(guests[0]+" "+"is not coming.");
guests.splice(0, 1, "Ali");
// console.log("We have found a big dinner table");
guests.unshift("Zaid");
guests.splice(2, 0, "Zain");
guests.push("Nomi");
// 17
// console.log("Sorry, to say that our new dinner table won't arrive in time for the dinner,so we can invite only two guests.");
console.log(guests);
// for(let i=guests.length; i>2; i--){
//    let delUser = guests.pop()
//     console.log(delUser +" " +"we are sorry we can't invite you.")
// }
while (guests.length > 2) {
    let delUser = guests.pop();
    console.log(delUser + " " + "we are sorry we can't invite you.");
}
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i] + " " + "you are still invited.");
}
guests.splice(0, 2);
console.log(guests);
