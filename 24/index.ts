// • Tests for equality and inequality with strings
console.clear()
let student= "brilliant";
console.log("Is student =='brilliant'? |predict true.");
console.log(student =='brilliant');
// programme2
let  coding = "exciting";
console.log("Is coding=='boring'? |predict false.");
console.log(coding == 'boring');
// • Tests using the lower case function
let name1 ="ABduLLah";
if(name1.toLowerCase() !== name1){
    console.log(false);
}else{
    console.log(name1)
   
}
// programme2
let name2= "pakistan";
if(name2.toLowerCase() == name2){
    console.log(true);

}else{
    console .log(name2);
}

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// inequality test
let x = 7
let y = 3 

console.log("x != y | true" );
console.log(x !== y);

let i = 3 ;
let j = "3";
console.log("x =y |'false'");
console.log(x === y)
 
let x1 = 8;
let y1 = 8
if (x1 == y1) {
    console.log(true)
}
console.log(x1 === y1)

let x2 = 4;
let y2 = 5;
if(x2 ==y2){
    console.log(false)
}
console.log(x2 === y2)


let c =44 ;
let d = 45;
if(c<d){
    console.log(true);
}
console.log(c<d)

if(c>d){
    console.log(false)

}
console.log(c>d)
if(c<= d){
    console.log(true);
}
console.log(c<= d)
if(c>=d){
    console.log(false)
}
console.log(c>=d)
if(d<=c){
    console.log(false)
}
console.log(d<=c)

if(d>=c)
{
    console.log(true)
}
console.log(d>=c)

// • Tests using "and" and "or" operators
if(c >1 && d > 1){
    console.log(true)
}
console.log(c>1&& d>1)
if(c>1 && d<1){
    console.log(false)
}
 console.log(c>1 && d<1)

 let k=7;
 let l = 9;
 if(k == 7 || l==9){
    console.log(true)
 } 
 console.log(k ==7 || l==9)


 if(k == 8 || l== 11){
console.log(false)
 } else {
    console.log(true)
 }

 console.log(k == 8 || l==11)


//  Test whether an item is in a array
let arr = [1,2,3,4,5,6,7];
for(i=0;i<=arr.length;i++){
    if (arr[i] === 5){
        console.log(true)
}
}

// • Test whether an item is not in a array
let fruits = ["apple","banana","coconut","melon"]
    for(i =0 ;i<= arr.length ;i++) {
        if("arr[i] === water melon"){
            console.log(false);
        }

    }
