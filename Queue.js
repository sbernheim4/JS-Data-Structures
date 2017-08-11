module.exports = class Queue {

	constructor() {
		this.queueSize = 0;
		this.q = [];
	}

	dequeue() {
		if (!this.isEmpty()) {
			const val = this.q[0];

			this.q.splice(0, 1);
			this.queueSize -= 1;

			return val;
		}
		return new Error( `Queue is empty, cannot dequeue`);
	}

	enqueue(val) {
		this.q.push(val);
		this.queueSize += 1;
	}

	isEmpty() {
		return this.queueSize === 0;
	}

	peek() {
		if (this.isEmpty()) {
			return new Error(`Queue is empty, cannot peek`);
		}

		return this.q[0];
	}

	size() {
		return this.queueSize;
	}
};

