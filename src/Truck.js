var Car = require('./Car.js');

// Implement your Truck here
function Truck(make, model, year, color, seats, passengers) {
Car.call(this, make, model, year, color, seats, passengers)
this.passengers = passengers || []
this.running = false
}
Truck.prototype = Object.create(Car.prototype)

Truck.prototype.pickUp = function (name) {
if (this.running && this.passengers.length < 2) { console.log("You are driving to pick up" + name)
this.passengers.push(name)
return true
}
else return false
}


module.exports = Truck;
