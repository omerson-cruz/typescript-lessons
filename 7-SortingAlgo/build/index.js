"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([1, 5, -2, -2, 1, 123]);
// const sorter = new Sorter(numbersCollection)
numbersCollection.sort();
console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection('Xysdfazz')
// const sorterCharacters	= new Sorter(charactersCollection);
// sorterCharacters.sort()
// // console.log(charactersCollection.data)
// const linkedList = new LinkedList();
// linkedList.add(100);
// linkedList.add(123);
// linkedList.add(-12.2)
// const sorter_linkedList = new Sorter(linkedList)
// sorter_linkedList.sort();
// linkedList.print();
/* Testing the Abstrac Inheritance Implementation */
var charactersCollection = new CharactersCollection_1.CharactersCollection('ay91pwpfadsfuaoipufsfasfdsdfDFsdfsd');
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(8789);
linkedList.add(12);
linkedList.add(546);
linkedList.add(-456);
linkedList.add(-12.2);
linkedList.sort();
linkedList.print();
