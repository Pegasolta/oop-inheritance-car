// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Truck class
var Truck = require('../src/Truck');
var Car = require('../src/Car');

// Your tests will go below here
// //// TEST PHASE /////////////////////////////////////////

// test constructor
console.log(Truck instanceof Car)
console.log("Testing the constructor")
var ottoTruck = new Truck("Otto", "Self-driving", 2016, "#000", 3)
console.log(ottoTruck instanceof  Truck)
assert.strictEqual(ottoTruck.make, "Otto", "Contructor did not set make")
assert.strictEqual(ottoTruck.model, "Self-driving", "Contructor did not set model")
assert.strictEqual(ottoTruck.year, 2016, "Constructor did not set year")
assert.strictEqual(ottoTruck.color, "#000", "Contructor did not set color")
assert.strictEqual(ottoTruck.seats, 3, "Constructor did not set seats")
success("YES LA!!!")
