// const magicians=["Ejaz mughal","M.Yaseen","Afzal Rashid","Abid"];
// function show_magicians(magicians:string[]){
//     for(let i=0;i<magicians.length;i++){
//         console.log(magicians[i]);
//     }
// }
// show_magicians(magicians)


const arr: string[] = ["Magician A", "Magician B", "Magician C", "Magician D"]

function show_magicians( arrayInput: string[] ) {

    arrayInput.map( (value) => console.log(value) );

}

show_magicians(arr);
