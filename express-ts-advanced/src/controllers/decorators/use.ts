import 'reflect-metadata'
import { RequestHandler } from "express";
import { MetadataKeys } from './MetadataKeys'

// factory decorator
// So the key difference with this is that we want to call this Use decorator multiple times
export function use(middleware: RequestHandler) {
	return function(target: any, key: string, desc: PropertyDescriptor) {
		const middlewares = Reflect.getMetadata(
			MetadataKeys.middleware,
			target,
			key
		) || [];  // check if we have already assigned a middleware previously else assign an empty array

		// middlewares.push(middleware) // @247 - 5:46

		console.log('middlewares: ', middlewares)

		Reflect.defineMetadata(
			MetadataKeys.middleware,
			// middlewares,
			[...middlewares, middleware],
			target,
			key)
	}
}

