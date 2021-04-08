"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([1, 5, -2, -2, 1, 123]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
// console.log(numbersCollection)
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xysdfazz');
var sorterCharacters = new Sorter_1.Sorter(charactersCollection);
sorterCharacters.sort();
// console.log(charactersCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(123);
linkedList.add(-12.2);
var sorter_linkedList = new Sorter_1.Sorter(linkedList);
sorter_linkedList.sort();
linkedList.print();
