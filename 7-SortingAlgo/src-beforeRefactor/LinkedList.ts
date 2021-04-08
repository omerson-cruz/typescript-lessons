export class Node {
	next: Node | null = null;

	constructor(public data: number) {}
}

export class LinkedList{
	head: Node | null = null // default value of head is null like the Node's next property

	add(data: number): void {
		const node = new Node(data)

		if (!this.head){
			this.head = node
			return;
		}

		let tail = this.head;
		while(tail.next){
			tail = tail.next;
		}

		tail.next = node;
	}

	get length(): number {
		if(!this.head){
			return 0
		}

		let length  = 1;
		let node = this.head;
		while(node.next) {  // traverse the Node list and increase length value
			length++;
			node = node.next;
		}

		return length
	}

	at(index: number): Node {
		if(!this.head){
			throw new Error('Index out of bounds')
		}

		let counter = 0;
		let node: Node | null = this.head;

		while(node) {
			if(counter === index){ //@88-15:00
				return node;
			}

			counter++;
			node = node.next;  //@88-16:21 --> error because  next: Node | null
		}

		throw new Error('Index out of bounds'); //@88-16:22 --> need to return something with this function
	}

	compare(leftIndex: number, rightIndex:  number): boolean {
		if(!this.head) {
			throw new Error('List is Empty')
		}

		return this.at(leftIndex).data > this.at(rightIndex).data;
	}

	swap(leftIndex: number, rightIndex: number): void {
		// for easier implementation we are not Swapping the Node themselves but only the Values between them
		const leftNode = this.at(leftIndex);
		const rightNode = this.at(rightIndex);

		const leftHand = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = leftHand;
	}

	print(): void {
		if(!this.head) {
			return;
		}

		let node: Node | null = this.head;
		while(node) {
			console.log(node.data + ' ');
			node = node.next;
		}
	}

}