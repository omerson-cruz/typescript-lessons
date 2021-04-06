const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
}

// type Aliasing to be used or best used with Tuple
type Drink = [string, boolean, number]

// Tuple type sample. Enforcing a type of order in the elements
const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 30]


const carSpecs: [number, number] = [400, 3354]

const carStats = {
	horsepower: 400,
	weight: 3354
}



