module.exports = class Queue {

	constructor() {
		this.heap = [];
		this.heapSize = 0;
	}

	size() {
		return this.heapSize;
	}

	parent(index) {
		return this.heap[Math.floor(index/2)];
	}

	left(index) {
		return this.heap[2 * index];
	}

	right(index) {
		return this.heap[(2 * index) + 1];
	}

	insert() {
		return;
	}

	delete() {
		return;
	}

	heapifyUp() {
		return;
	}

	heapifyDown() {
		return;
	}

	buildMaxHeap(array) {
		return;
	}

};
