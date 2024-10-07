// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
// DONE: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
    // DONE: Create a constructor that accepts the properties of the Motorbike class
    // DONE: The constructor should call the constructor of the parent class, Vehicle
    // DONE: The constructor should initialize the properties of the Motorbike class
    // DONE: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    constructor(started, currentSpeed, vin, color, make, model, year, weight, topSpeed, wheels) {
        super(started, currentSpeed);
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
    }
    wheelie(vehicle) {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    // DONE: Implement the wheelie method
    // DONE: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    // DONE: Override the printDetails method from the Vehicle class
    //  The method should call the printDetails method of the parent class
    //  The method should log the details of the Motorbike
    //  The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    printDetails() {
        super.printDetails();
        console.log(`Vehicle VIN: ${this.vin}`);
        console.log(`Vehicle Make: ${this.make}`);
        console.log(`Vehicle Model: ${this.model}`);
        console.log(`Vehicle Year: ${this.year}`);
        console.log(`Vehicle Weight: ${this.weight}`);
        console.log(`Vehicle Top Speed: ${this.topSpeed}`);
        console.log(`Vehicle Color: ${this.color}`);
        console.log(`Vehicle Wheels Info: ${this.wheels}`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
