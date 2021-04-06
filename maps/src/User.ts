import faker from 'faker';
import { Mappable } from './CustomMap';


export class User implements Mappable{
	name: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string = 'red'; // immediately instsantiating the class field here. Not recommended tho. For demo purposes only

	constructor() {
		this.name = faker.name.firstName();

		// note that this.location.lat or the this.location.lng will produce error
		// because during the class construction the location object is still undefined
		this.location = {
				lat: parseFloat(faker.address.latitude()),  // convert the latitude to a number since faker returns a string
				lng: parseFloat(faker.address.longitude()),
		}

	}

	markerContent(): string {
		return `User Name: ${this.name}`
	}


}

export default {
	myProperty: 'myObject',
	newUser: new User()
}