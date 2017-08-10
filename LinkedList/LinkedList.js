const Node = require('./Node.js');

module.exports = class LinkedList {

	constructor() {
		this.head = new Node(-1);
		this.tail = this.head;

		// If no initial value was passed in, the size of the linked list should be 0
		// otherwise it should be 1
		this.size = 0;
	}

	getHead() {
		return this.head;
	}

	getTail() {
		return this.tail;
	}

	getSize() {
		return this.size;
	}

	add(data) {
		this.linkAfter(data);
	}

	add(index, data) {

		// Return an error if index < 0
		if (index < 0 || index > this.size) {
			return new Error('Index out of Bounds');
		}

		// If index specified is greater than the size of the list, add the node to
		// the end of the list
		if (index === this.size) {
			this.linkAfter(data);
		}

		// the new node to be inserted
		let newNode = new Node(data);

		// Advance curr to the node where the new node will be placed after
		// add(3, 4) Add a node at index 3 whose data value is 4

		// INDEX:          0     1     2     3     4
		//    EX: head --> 1 --> 2 --> 3 --> 5 --> 6
		//                   curr
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

		this.size += 1;

		return True;
	}

	remove() {
		this.tail = this.tail.prev;
		this.tail.next.prev = null;
		this.tail.next = null;

		this.size -= 1;
	}

	// remove(3) --> Remove the node at index 3
	// INDEX:          0     1     2     3     4
	//    EX: head --> 1 --> 2 --> 3 --> 4 --> 4
	//                                  curr
	remove(index) {
		let curr = this.head.next;
		for (var i = 0; i < index; i++) {
			curr = curr.next;
		}

		curr.prev.next = curr.next;
		curr.next.prev = curr.prev;

		return curr;
	}

	print() {
		let curr = this.head;
		while (curr.next !== null) {
			console.log(curr.next.getData());
			curr = curr.next;
		}
	}

};
