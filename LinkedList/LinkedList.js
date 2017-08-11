const Node = require(`./Node.js`);

module.exports = class LinkedList {

	constructor() {
		this.head = new Node(-1);
		this.tail = this.head;

		// If no initial value was passed in, the size of the linked list should be 0
		// otherwise it should be 1
		this.listSize = 0;
	}

	head() {
		return this.head;
	}

	tail() {
		return this.tail;
	}

	size() {
		return this.listSize;
	}

	add(data, index) {
		// Return an error if index < 0 or index > size
		if (index < 0 || index > this.listSize) {
			return new Error(`Index: ${index} out of Bounds`);
		}

		// If no index is passed in, or the index is the size of the list, call
		// linkAfter to add the node to the end of the list. Otherwise insert the
		// node at the index specified
		if (index === undefined || index === this.listSize) {
			this.linkAfter(data);
		} else {
			// the new node to be inserted
			let newNode = new Node(data);

			// Advance curr to the node where the new node will be placed after
			// add(3, 4) Add a node at index 3 whose data value is 4
			// INDEX:          0     1     2     3     4
			//    EX: head --> 1 --> 2 --> 3 --> 5 --> 6
			//                           curr
			let curr = this.head;
			for (var i = 0; i < index; i++) {
				curr = curr.next;
			}

			// Adjust the pointers
			newNode.next = curr.next;
			newNode.prev = curr;
			curr.next.prev = newNode;
			curr.next = newNode;
		}
		return this.listSize += 1;
	}

	linkAfter(data) {
		// node to be added to the list
		let newNode = new Node(data);

		if (this.head.next === null) {
			// If there are no elements in the list, add the element after the head
			this.head.next = newNode;
			newNode.prev = this.head;
			this.tail = this.head.next;
		} else {
			// If there is at least 1 element in the list, add the element after the tail
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = this.tail.next;
		}
	}

	// remove(3) --> Remove the node at index 3
	// INDEX:          0     1     2     3     4
	//    EX: head --> 1 --> 2 --> 3 --> 4 --> 4
	//                                  curr
	remove(index) {
		if (index >= this.listSize || index < 0) {
			throw new Error(`Index: ${index} out of bounds`);
		}

		if (index === undefined) {
			// If index is not passed in, remove the last element in the list
			this.tail = this.tail.prev;
			this.tail.next.prev = null;
			this.tail.next = null;
		} else {
			let curr = this.head.next;
			for (var i = 0; i < index; i++) {
				curr = curr.next;
			}

			curr.prev.next = curr.next;
			curr.next.prev = curr.prev;
		}
		return this.listSize -= 1;
	}

	peek() {
		return this.head.next;
	}

	toArray() {
		let curr = this.head;
		let arr = [];

		while (curr.next !== null) {
			curr = curr.next;
			arr.push(curr.getData());
		}

		return arr;
	}

	clear() {
		this.head.next = null;
		this.tail = this.head;
		this.size = 0;
	}

	print() {
		let curr = this.head;
		while (curr.next !== null) {
			curr = curr.next;
			console.log(curr.getData());
		}
	}

};
