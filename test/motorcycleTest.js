// load the assert plugin (for testing)
var assert = require('assert');
var success = require('./helpers/success');

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle');
var Car = require('../src/Car');

// Your tests will go below here
// //// TEST PHASE 1 /////////////////////////////////////////

// test constructor
console.log('Testing Constructor');
var bikeBro = new Motorcycle("Honda", "Rocket", 2011, "Black", 2);
assert.strictEqual(bikeBro.make, "Honda", "Constructor did not set make");
assert.strictEqual(bikeBro.model, "Rocket", "Constructor did not set  model.");
assert.strictEqual(bikeBro.year, 2011, "Constructor did not set year.");
assert.strictEqual(bikeBro.color, "Black", "Constructor did not set  color.");
assert.strictEqual(bikeBro.seats, 2, "Constructor did not set seats.");
success("I made a bike!");

// //// TEST PHASE 2 /////////////////////////////////////////

// test start
console.log('Testing starting the bike');
assert.equal(typeof(bikeBro.start), 'function', 'there is no start() function');
bikeBro.start();
assert.strictEqual(bikeBro.running, true, 'Failed to start the bike. running should = true');
success("start works!");

// test start
console.log('Testing turning off the bike');
assert.equal(typeof(bikeBro.off), 'function', 'there is no off function');
bikeBro.off();
assert.strictEqual(bikeBro.running, false, 'Failed to turn off the bike. running should = false');
success();

// test wheelie
console.log('Testing a bike wheelie');
assert.equal(typeof(bikeBro.wheelie), 'function', 'there is no wheelie function');
assert.strictEqual(typeof(bikeBro.wheelie('stunt')), 'boolean', 'wheelie function did not return a boolean value');
assert.strictEqual(bikeBro.wheelie('stunt'), false, 'Bike allowed wheelies while not running.');
bikeBro.start();
assert.strictEqual(bikeBro.wheelie('stunt'), true, 'Bike did not do wheelie while running.');
success();
