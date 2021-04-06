const profile = {
	name: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15
	},
	setAge(age: number): void {
		this.age = age;
	}
};
// the annotation of number is not going to work even though age is of type number
// but because it is inside the profile object literal then we need to annotate using the profile
// object literal definition
// const { age } :number = profile // this one below will not work

// we can ignore the name collission in the below since typscript uses a name variable somewhere else in it's library. But it's really not an error though
const { age , name } : { age: number; name: string } = profile

// deeply nested destructuring
const {coords: {lat, lng}} : { coords: {lat : number ; lng : number}} = profile;