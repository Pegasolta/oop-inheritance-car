var Car = require('./Car.js');

// Implement your Motorcycle here
function Motorcycle(make, model, year, color, seats, passengers) {
Car.call(this, make, model, year, color, seats, passengers)
this.passengers = passengers || []
this.running = false
}
Motorcycle.prototype = Object.create(Car.prototype)
Motorcycle.prototype.wheelie = function(stunt) {
  if (this.running) {
    console.log("Doing a sick wheelie!!")
    return true
  }
  return false
}

module.exports = Motorcycle;
