import {Sortable, Sorter} from "./Sorter";

// export class NumbersCollection implements Sortable {
export class NumbersCollection extends Sorter {

	constructor(public data: number[]) {
		super()
	}

	compare(leftIndex: number, rightIndex: number) : boolean {
		return this.data[leftIndex] > this.data[rightIndex]
	}

	swap(leftIndex: number, rightIndex: number) : void {
		const leftHand = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftHand;
	}


	// this will be like or act like a normal property instead of a method
	get length(): number {
		return this.data.length;
	}
}