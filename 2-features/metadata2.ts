import 'reflect-metadata'


@controller
class Plane {
	color: string = 'red';

	@get('/login')
	fly(): void {
		console.log('wwoooooossh')
	}
}

function get(path: string) {
	return function (target: Plane, key: string){
		// console.log('key: ', key)
		// Reflect.defineMetadata('secret', 123, target, key)
		// Reflect.defineMetadata('secret', secretInfo, target, key)
		Reflect.defineMetadata('path', path, target, key)
	}
}


const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

// this secret value ==> 123
console.log('From the markFunction : ', secret)



/// Class Decorator
// typeof Plane ==>  refers to the construction function of Plane class
function controller(target: typeof Plane) {
	// gonna loop in all of the methods or keys of Plane class
	for (let key in target.prototype) {
		const path = Reflect.getMetadata('path', target.prototype, key);
		const middleware = Reflect.getMetadata('middleware', target.prototype, key);
		// here we are going to look for any object property that has the metadata of name 'secret'
		console.log('class decorator secret: ', secret)

		//// assuming we are implementing the router controller with the middleware as authentication and target.prototype[key] as the actual function
		// router.get(path, middleware, target.prototype[key])  /// for demo purposes. this will throw out some error
	}
}