"use strict";
const guests = ["Ahmad", "Junaid", "Hassaan"];
console.log(guests[0] + " " + "is not coming.");
guests.splice(0, 1, "Ali");
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i] + " " + "is coming.");
}
