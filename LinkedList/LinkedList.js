const Node = require('./Node.js');

module.exports = class LinkedList {

	constructor(dataVal) {
		let headDataVal = dataVal || -1;

		this.head = new Node(headDataVal);
		this.tail = this.head;

		// If no initial value was passed in, the size of the linked list should be 0
		// otherwise it should be 1
		this.size = headDataVal === -1 ? 0 : 1;
	}

	add(data) {
		this.linkAfter(data);
	}

	linkAfter(data) {
		let newNode = new Node(data);

		if (this.head.next === null) {
			this.head.next = newNode;
			newNode.prev = this.head;
			this.tail = this.head.next;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = this.tail.next;
		}

		this.size += 1;
	}

}
