
/// No need to import NumbersCollection since Sort does not have any dependency on it.
// import {NumbersCollection} from './NumbersCollection'


export interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex :number): void;
}

export abstract class Sorter {
	// collection: number[];

	// constructor(public collection: Sortable) {
	// 	// this.collection = collection;
	// }

	// Abstract Methods
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;

	// Abstract Properties
	abstract length: number;

	sort(): void {
		const { length } = this // notice how the length here is treated as real property even though it's actually an object property

		for (let i = 0; i < length; i++){
			for (let j = 0; j < length - i - 1; j++){
				// collection === number[]  --> typescript already knows that
				if (this.compare(j, j+1)){
					this.swap(j, j+1)
				}
			}
		}
	}
}