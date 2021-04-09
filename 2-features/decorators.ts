@classDecorator
class Boat {
	@testDecorator

	color: string ='red';

	get formattedColor() : string {
		return `This boat color is ${this.color}`
	}

	@testDecorator
	@logError('My error message')
	pilot(speed: string): void {
		// throw new Error();
		console.log('speed test', speed)

		if (speed === 'fast'){
			console.log('swish')
		}	else {
			console.log('why nothing')
		}
	}

	anotherFunc(param: string): void {
		console.log('another func', param)
	}
}

function testDecorator(target: any, key: string): void {
	console.log('Target: ', target);
	console.log('Key: ', key)
}

// using the property descriptor
function logError(errorMessage: string) {  // this is an Higher Order function
	return function (target: any, key: string, desc: PropertyDescriptor): void {  // this is the actual Decorator Function
		console.log('Target: ', target);
		console.log('Key: ', key)

		const method = desc.value;

		desc.value = function() {
			try {
				method();
			} catch (e) {
				console.log(errorMessage)
			}

		}
	}
}

function parameterDecorator(target: any, key: string, index: number) {
	console.log('parameter Decorator: ', key, index)
}

function classDecorator(constructor: typeof Boat) {
	console.log('Boat constructor: ', constructor)
}

new Boat().pilot('fast');

new Boat().anotherFunc('test')