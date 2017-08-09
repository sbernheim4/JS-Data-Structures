module.exports = class Queue {

	constructor() {
		this.size = 0;
		this.q = [];
	}

	dequeue() {
		if (!this.q.isEmpty()) {
			const val = this.q[0];

			this.q.splice(0, 1);
			this.size -= 1;

			return val;
		}

		throw `Queue is empty, cannot dequeue`;
	}

	enqueue(val) {
		this.q.push(val);
		this.size += 1;
	}

	isEmpty() {
		return this.size === 0;
	}

	peek() {
		if (!this.q.isEmpty()) {
			return this.q[0];
		}
		throw `Queue is empty, cannot peek`;
	}

	size() {
		return this.size;
	}
}

