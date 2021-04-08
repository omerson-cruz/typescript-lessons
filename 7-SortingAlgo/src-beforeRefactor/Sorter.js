"use strict";
/// No need to import NumbersCollection since Sort does not have any dependency on it.
// import {NumbersCollection} from './NumbersCollection'
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    // collection: number[];
    function Sorter(collection) {
        this.collection = collection;
        // this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // collection === number[]  --> typescript already knows that
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
