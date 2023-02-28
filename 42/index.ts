
// // const NamiirMagicians=["Ejaz","Yaseen","Afzal","Abid"];
// function show_magicians(magicians:string[]): void{
//     for(let i=0;i<magicians.length;i++){
//         console.log(magicians[i]);
//     }
// }
// const magicians=["Ejaz mughal","M.Yaseen","Afzal Rashid","Abid"];
// show_magicians(magicians)
// function make_great(magicians:string[]):void{
//     for(let i=0;i< magicians.length;i++){
//         magicians[i]="the Great" +magicians[i];
//     }
// }
// make_great(magicians)
// console.log(magicians);

let arr: string[] = ["Magician A", "Magician B", "Magician C", "Magician D"]

function show_magicians( arrayInput: string[] ) {

    arrayInput.map( (value) => console.log(value) );

}

function make_great( arrayInput: string[] ) {

     let newArray =  arrayInput.map( (value) => {
        return `The Great ${value}`;
    });

    arr = newArray;
}

// Pritning Array before adding "The Great"
show_magicians(arr)

// Adding "The Great to each array value"
make_great(arr);

// Printing Array after adding "The Great"
show_magicians(arr)
