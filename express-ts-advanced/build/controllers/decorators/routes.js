"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
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
function routeBinder(method) {
    return function (path) {
        // The purpose of this is to make the REST method function generator reusable
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            // Reflect.defineMetadata('method', 'get', target, key)
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
// using closed Data structure or Enum to prevent typos error to represent the REST method below instead of strings
// export const get = routeBinder('get')
// export const put = routeBinder('put')
// export const post = routeBinder('post')
// export const del = routeBinder('del')
// export const patch = routeBinder('patch')
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.post = routeBinder(Methods_1.Methods.post);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
//# sourceMappingURL=routes.js.map