const animals =["dog","horse","camel"];
for(let animal of animals){
console.log (animals)
}
for (let animal of animals ){
    switch(animal){
        case"dog":
        console.log('A dog would make a great pet')
        break;
        case"horse":
        console.log("horse is faithful");
        break;
        case"camel":
        console.log("camel is strong");
        break;

       
           
    }
}
console.log("all animals have four legs");