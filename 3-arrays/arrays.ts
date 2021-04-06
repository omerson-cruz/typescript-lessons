// can be typed inferred
const anyArray = [];
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// array of dates
const dates = [new Date(), new Date()]

// multidim array
// const carsByMake: string[][] = [  <<== implicitly inferred

const carsByMake = [
	['f150'],
	['corolla'],
	['camaro']
];

// Typescript benefits with Array
// Help with inference when extracting values
const myCar = carMakers[0];
const myCar2 = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// Help with 'map', 'forEach', 'reduce'
carMakers.map((car: string): string => {
	return car
})

// Flexible types
const importantDates = [new Date(), '2010-10-10']


const importantDates_v2: (string | Date)[] = [new Date(), '2010-10-10']

importantDates_v2.push('2010-10-10')
importantDates_v2.push(100); // this will ERROR