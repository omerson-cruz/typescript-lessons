import 'reflect-metadata'
import {Methods} from './Methods'
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
	value?: RequestHandler;  // @253 - 3:40 this is saying that the value or return type of the Function REST handler
															// should be of type REquestHandler

}

// export function get(path: string) {
// 	return function(target: any, key: string, desc: PropertyDescriptor) {
// 		Reflect.defineMetadata('path', path, target, key)
// 		Reflect.defineMetadata('method', 'get', target, key)
// 	}
// }

// export function post(path: string) {
// 	return function(target: any, key: string, desc: PropertyDescriptor) {
// 		Reflect.defineMetadata('path', path, target, key)
// 		Reflect.defineMetadata('method', 'post', target, key)
// 	}
// }

function routeBinder(method: string) {
	return function (path: string) { // looks like an ugly code since we have 2 levels of nested return.
	// The purpose of this is to make the REST method function generator reusable
		return function(target: any, key: string, desc: RouteHandlerDescriptor) {
			Reflect.defineMetadata(MetadataKeys.path, path, target, key)
			// Reflect.defineMetadata('method', 'get', target, key)
			Reflect.defineMetadata(MetadataKeys.method, method, target, key)
		}
	}
}

// using closed Data structure or Enum to prevent typos error to represent the REST method below instead of strings
// export const get = routeBinder('get')
// export const put = routeBinder('put')
// export const post = routeBinder('post')
// export const del = routeBinder('del')
// export const patch = routeBinder('patch')

export const get = routeBinder(Methods.get)
export const put = routeBinder(Methods.put)
export const post = routeBinder(Methods.post)
export const del = routeBinder(Methods.del)
export const patch = routeBinder(Methods.patch)



