class ArrayOfNumbers {
	constructor(public collection: number []) {}

	get(index: number): number {
		return this.collection[index]
	}
}

class ArrayOfStrings {
	constructor(public collection: string []) {}

	get(index: number): string {
		return this.collection[index]
	}
}



// GENERIC implementation of the above
class ArrayOfAnything<T> {
	constructor(public collection: T []){}

	get(index: number): T {
		return this.collection[index]
	}
}


// example of instantiating generic class
new ArrayOfAnything<string>(['a', 'b', 'c'])

// or you can do some implicit type for generic such as below
const  arr2 =  new ArrayOfAnything(['a', 'b', 'c'])


// Example of FUNCTION GENERICS
function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++){
		console.log(arr[i])
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log()
	}
}


// Impelementation of Function Generics
function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i])
	}
}

printAnything<string>(['a', 'b', 'c'])



// Generic Constraints

class Car {
	print() {
		console.log('I am a car')
	}
}


class House {
	print() {
		console.log('I am a House')
	}
}

interface Printable {
	print(): void;
}

// <T extends Printable> this is the Promise or Constraint that the elements will have
// print() method
function printHouseOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHouseOrCars([1,2,3,4])  // this will error

printHouseOrCars([new Car(), new House(), new House(), new Car()])

// or we can be VERY SPECIFIC on the Array's Elements
printHouseOrCars<House>([new House(), new House(), new House()])










