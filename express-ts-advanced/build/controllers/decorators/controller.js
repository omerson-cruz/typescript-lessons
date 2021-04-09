"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
// import express from 'express'
// export const router = express.Router();  // We're going to use the SingleTon App Router
var AppRouter_1 = require("../../AppRouter");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid Request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) { // if the key passed on to the bodyValidator decorator is not present then return error
                res.status(422).send("Missing property " + key);
                return;
            }
        }
        next();
    };
}
// conroller decorator ==> this is a decorator for a constructor
// 		that is why the target we should use the "target.prototype" below
function controller(routePrefix) {
    return function (target) {
        var _a;
        var router = AppRouter_1.AppRouter.getInstance(); // using the singleton router
        for (var key in target.prototype) {
            // will check if the key is typeof method
            var routeHandler = target.prototype[key];
            // try to get the path from the method REST handler, if there's any
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            // get the REST method from the metadata
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            var middlewares = (_a = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, // why use target only and not target.prototype??? Answer. Nagkamali si Stepehen @248 - 0:35 explaining target.prototype
            key)) !== null && _a !== void 0 ? _a : []; // to prevent giving undefined
            // BODY FORM VALIDATORS
            var requiredBodyProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];
            console.log('require body validators: ', requiredBodyProps);
            var validator = bodyValidators(requiredBodyProps);
            // END - BODY FORM VALIDATORS
            console.log('middlewares: ', middlewares);
            // if we founda path property
            // @245 - 1:55 explaining why router[method] is giving out error and why Typescript cannot immediately define what it means
            if (path) {
                // remember that express.router has a fix method or interface properties such as get, post, put, delete, patch
                router[method].apply(router, __spreadArray(__spreadArray(["" + routePrefix + path], middlewares), [validator,
                    routeHandler]));
            }
        }
    };
}
exports.controller = controller;
//# sourceMappingURL=controller.js.map