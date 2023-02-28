"use strict";
function orderSandwich(...items) {
  console.log(`Your ordered a sandwich with:${items.join(",")}`);
}
orderSandwich("honey", "salad", "chicken");
orderSandwich("mayo", "tomato", "cheese");
orderSandwich("peanut butter", "turkey", "bar b q sauce");
