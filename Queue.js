module.exports = class Queue {

	constructor() {
		this.size = 0;
		this.q = [];
	}

	dequeue() {
		const val = this.q[0];

		this.q.splice(0, 1);
		this.size -= 1;

		return val;
	}

	enqueue(val) {
		this.q.push(val);
		this.size += 1;
	}

	isEmpty() {
		return this.size === 0;
	}

	size() {
		return this.size;
	}
}

