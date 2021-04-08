import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from "./LinkedList";


const numbersCollection = new NumbersCollection([1,5,-2,-2,1,123])
const sorter = new Sorter(numbersCollection)
sorter.sort();

// console.log(numbersCollection)

const charactersCollection = new CharactersCollection('Xysdfazz')
const sorterCharacters	= new Sorter(charactersCollection);
sorterCharacters.sort()
// console.log(charactersCollection.data)


const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(123);
linkedList.add(-12.2)

const sorter_linkedList = new Sorter(linkedList)
sorter_linkedList.sort();
linkedList.print();



