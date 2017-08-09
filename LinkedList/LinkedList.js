const Node = require('./Node.js');

module.exports = class LinkedList {

	constructor(dataVal) {
		this.head = new Node(-1);
		this.tail = this.head;

		// If no initial value was passed in, the size of the linked list should be 0
		// otherwise it should be 1
		this.size = 0;
	}

	add(data) {
		this.linkAfter(data);
	}

	linkAfter(data) {
		let newNode = new Node(data);

		if (this.head.next === null) {
			// If there are no elements in the list
			this.head.next = newNode;
			newNode.prev = this.head;
			this.tail = this.head.next;
		} else {
			// If there is at least 1 element in the list
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = this.tail.next;
		}

		this.size += 1;
	}

}
