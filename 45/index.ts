function carmanu(model:string,color:string,manufacturer:string,options:{}){
    let car = {model,color,manufacturer,...options};
    return car;
}
let car = carmanu("2020","white","Honda",{transmission:"automatic",condition:"good"})
console.log(car);