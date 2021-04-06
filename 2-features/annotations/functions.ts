
// Function annotation
const add = (a: number, b: number) => {
	return a + b;
}


const subtract = (a: number, b: number): number => {
	return a - b;
}

function divide(a: number, b: number): number {
	return a/b;
}

const multiply = function(a: number, b: number): number {
	return a * b;
}


// with return type void we can return 'null' or 'undefined'
const logger = (message: string) : void => {
	console.log(message);
}

// for error handling throwing an error simply means its never going to return anything becaus of that throw error statement
const throwError = (message: string): string => {
	if(!message){
		throw new Error(message)
	}
	return message;
}


// Destructuring with Annotations
const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
}

// const logWeather = (forecast: { date: Date, weather: string}): void => {
// 	console.log(forecast.date)
// 	console.log(forecast.weather)
// }


// using a Destructuring Syntax instead of the parameter name forecast
const logWeather = ({date:date2 = new Date(), weather} : { date: Date, weather: string}): void => {
	console.log(date2) // date2 is another name for date
	console.log(weather)
}


logWeather(todaysWeather)






