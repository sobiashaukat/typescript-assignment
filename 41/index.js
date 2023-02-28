"use strict";
// function show_magicians(magicians:string[]){
//     for(let i=0;i<magicians.length;i++){
//         console.log(magicians[i]);
//     }
// }
// const magicians=["Ejaz mughal","M.Yaseen","Afzal Rashid","Abid"];
// show_magicians(magicians)
/**
 * Make a array of magician’s names.
 * Pass the array to a function called show_magicians(),
 * prints the name of each magician in the array.
 */
const arr = ["Magician A", "Magician B", "Magician C", "Magician D"];
function show_magicians(magicians_array) {
    let arraMag = [...magicians_array];
    arraMag.map((name) => {
        console.log(name);
    });
}
show_magicians(arr);
