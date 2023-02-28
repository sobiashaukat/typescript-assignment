"use strict";
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const magicians = ["Ejaz mughal", "M.Yaseen", "Afzal Rashid", "Abid"];
show_magicians(magicians);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
make_great(magicians);
console.log(magicians);
make_great([...magicians]);
console.log(' magicians with the Great');
make_great(magicians);
console.log(magicians);
show_magicians([...magicians]);
