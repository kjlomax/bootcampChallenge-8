// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
const defaultWheel = new Wheel;
// DONE: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // DONE: Create a constructor that accepts the properties of the Truck class
    //  The constructor should call the constructor of the parent class, Vehicle
    //  The constructor should initialize the properties of the Truck class
    //  The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    constructor(started, currentSpeed, vin, color, make, model, year, weight, topSpeed, wheels = [defaultWheel, defaultWheel, defaultWheel, defaultWheel], towingCapacity) {
        super(started, currentSpeed);
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    // DONE: Override the printDetails method from the Vehicle class
    //  The method should call the printDetails method of the parent class
    // The method should log the details of the Truck
    //: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
        console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
        console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
        console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
    }
    ;
    // DONE: Implement the tow method from the AbleToTow interface
    //  Get the make an model of the vehicle if it exists
    //  Check if the vehicle's weight is less than or equal to the truck's towing capacity
    //  If it is, log that the vehicle is being towed
    //  If it is not, log that the vehicle is too heavy to be towed
    tow(vehicle) {
        if (vehicle.make && vehicle.model) {
            if (vehicle.weight <= this.towingCapacity) {
                console.log(`The ${vehicle.make} ${vehicle.model} is being towed`);
            }
            else {
                console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed`);
            }
        }
    }
    ;
}
;
// Export the Truck class as the default export
export default Truck;
