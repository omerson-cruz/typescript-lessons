import 'reflect-metadata'

const plane = {
	color: 'red'
}

Reflect.defineMetadata('note', 'hi there', plane)
Reflect.defineMetadata('height', 10, plane)

console.log(plane)

const note = Reflect.getMetadata('note', plane)
const height = Reflect.getMetadata('height', plane)
console.log('note: ', note)
console.log('height: ', height)


// it's like assigning the note with value hi there to the object's color property
Reflect.defineMetadata('note', 'hi there', plane, 'color')

// get the metadata of the object's color property
const note2 = Reflect.getMetadata('note', plane, 'color')

console.log('note2: ', note2)





