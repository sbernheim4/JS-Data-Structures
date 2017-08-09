const Node = require('./Node.js');

module.exports = class LinkedList {

	constructor() {
		this.head = new Node(-1);
		this.tail = this.head;
		this.size = 0;
	}

}
