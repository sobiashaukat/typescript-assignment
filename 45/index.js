"use strict";
function carmanu(model, color, manufacturer, options) {
    let car = Object.assign({ model, color, manufacturer }, options);
    return car;
}
let car = carmanu("2020", "white", "Honda", { transmission: "automatic", condition: "good" });
console.log(car);
