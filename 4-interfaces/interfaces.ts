// But take note that Interface are loose. Meaning the part of the code implementing this
// should only implement the name, year, broken. If ther is additional properties then it doesnt really matter
interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
	summary(): string;
}


interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: new Date,
	broken: true,
	summary(): string {
		return `Name: ${this.name}`
	}
}


const myDrink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`
	}
}


// without interface you see we are typing really long annotations for the
// 	printVehicle function
const printVehicle = (vehicle: Reportable): void => {
	// console.log(`Name: ${vehicle.name}`)
	// console.log(`Year: ${vehicle.year}`)
	// console.log(`Name: ${vehicle.broken}`)
	console.log(`${vehicle.summary()}`)
}

printVehicle(oldCivic);


// printSummary is a more reusable code or method
const printSummary = (item: Reportable): void => {
	console.log(`${item.summary()}`)
}

// a real interface implementation that only cares about the exposed methods
printSummary(oldCivic)
printSummary(myDrink)