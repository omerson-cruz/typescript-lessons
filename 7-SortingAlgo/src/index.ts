import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from "./LinkedList";


const numbersCollection = new NumbersCollection([1,5,-2,-2,1,123])
// const sorter = new Sorter(numbersCollection)
numbersCollection.sort();
console.log(numbersCollection.data)

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
const charactersCollection = new CharactersCollection('ay91pwpfadsfuaoipufsfasfdsdfDFsdfsd');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(8789);
linkedList.add(12);
linkedList.add(546);
linkedList.add(-456);
linkedList.add(-12.2)
linkedList.sort();
linkedList.print();


