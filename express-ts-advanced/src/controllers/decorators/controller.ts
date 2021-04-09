import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'

// import express from 'express'
// export const router = express.Router();  // We're going to use the SingleTon App Router
import { AppRouter } from '../../AppRouter'

import {Methods} from '../decorators/Methods'
import { NextFunction, RequestHandler, Request, Response} from 'express'


function bodyValidators(keys: string[]): RequestHandler{
	return function(req: Request, res: Response, next: NextFunction): void {
		if (!req.body) {
			res.status(422).send('Invalid Request')
			return
		}

		for (let key of keys) {
			if (!req.body[key]) { // if the key passed on to the bodyValidator decorator is not present then return error
				res.status(422).send(`Missing property ${key}`)
				return;
			}
		}

		next();
	}
}


// conroller decorator ==> this is a decorator for a constructor
// 		that is why the target we should use the "target.prototype" below
export function controller(routePrefix: string) {
	return function(target: Function) { // decorator for a Class Controller
		const router = AppRouter.getInstance(); // using the singleton router

		for (let key in target.prototype) {
			// will check if the key is typeof method
			const routeHandler = target.prototype[key];

			// try to get the path from the method REST handler, if there's any
			const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)

			// get the REST method from the metadata
			const method: Methods = Reflect.getMetadata(
				MetadataKeys.method,
				target.prototype,
				key
				)


			const middlewares = Reflect.getMetadata(
				MetadataKeys.middleware,
				target.prototype,  // why use target only and not target.prototype??? Answer. Nagkamali si Stepehen @248 - 0:35 explaining target.prototype
				key
				) ?? []; // to prevent giving undefined


				// BODY FORM VALIDATORS
				const requiredBodyProps = Reflect.getMetadata(
					MetadataKeys.validator,
					target.prototype,
					key
				) || [];

				console.log('require body validators: ', requiredBodyProps)

				const validator = bodyValidators(requiredBodyProps)

				// END - BODY FORM VALIDATORS

				console.log('middlewares: ', middlewares)

			// if we founda path property
			// @245 - 1:55 explaining why router[method] is giving out error and why Typescript cannot immediately define what it means
			if (path){
				// remember that express.router has a fix method or interface properties such as get, post, put, delete, patch
				router[method](
					`${routePrefix}${path}`,
					 ...middlewares,
					 validator,
					 routeHandler)
			}
		}
	}
}