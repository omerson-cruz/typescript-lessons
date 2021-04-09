"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
// factory decorator
// So the key difference with this is that we want to call this Use decorator multiple times
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || []; // check if we have already assigned a middleware previously else assign an empty array
        // middlewares.push(middleware) // @247 - 5:46
        console.log('middlewares: ', middlewares);
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, __spreadArray(__spreadArray([], middlewares), [middleware]), target, key);
    };
}
exports.use = use;
//# sourceMappingURL=use.js.map