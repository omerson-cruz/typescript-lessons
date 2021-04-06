// classes in typescript are different from the Classes in ES6 Javascript

class Vehicle {
	public drive(): void {
		console.log('chugga chugga')
	}

	// color: string; // initialize color to red

	// constructor(color: string) {
	// 	this.color = color;
	// }

	constructor(public color: string) {

	}

	public honk(): void {
		console.log('honk honk')
	}
}

class Car extends Vehicle{

	// notice how we don't declare the "color" as public it's because
	// that "color" field is a member of the parent Vehicle.
	// we are just passing through the value of color from Car's constructor to the parent Vehicle
	constructor(public wheels: number, color: string) {
		super(color)
	}

	// override the drive method in the Vehicle class
	public drive(): void {
		console.log('vroooom')
	}

	startDrivingProcess(): void {
		this.drive()
		this.honk()
	}
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'orange');

console.log(car.color)

car.honk();
car.startDrivingProcess();



