
/// No need to import NumbersCollection since Sort does not have any dependency on it.
// import {NumbersCollection} from './NumbersCollection'


export interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex :number): void;
}

export class Sorter {
	// collection: number[];

	constructor(public collection: Sortable) {
		// this.collection = collection;
	}

	sort(): void {
		const { length } = this.collection

		for (let i = 0; i < length; i++){
			for (let j = 0; j < length - i - 1; j++){
				// collection === number[]  --> typescript already knows that
				if (this.collection.compare(j, j+1)){
					this.collection.swap(j, j+1)
				}
			}
		}
	}
}