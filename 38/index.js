"use strict";
function describe_city(city, country = "unknown") {
    console.log(`${city} is in ${country}`);
}
describe_city("Lahore", "Pakistan");
describe_city("london", "England");
describe_city("Istanbol");
describe_city("new york", "America");
