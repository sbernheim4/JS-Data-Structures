module.exports = class MaxHeap {

	constructor() {
		this.heap = [];
		this.heapSize = 0;
	}

	size() {
		return this.heapSize;
	}

	parent(index) {
		return this.heap[Math.floor((index - 1)/2)];
	}

	left(index) {
		return this.heap[(2 * index) + 1];
	}

	right(index) {
		return this.heap[(2 * index) + 2];
	}

	insert(val) {
		// add val to the end of the array
		this.heap.push(val);
		this.heapSize += 1;
		this.heapifyUp(this.size() - 1);
	}

	delete() {
		return;
	}

	heapifyUp(index) {
		let i = index;
		let par = Math.floor((index - 1) / 2);

		// Keep swaping child with parent until the max heap property is satisfied
		while(this.heap[i] > this.parent(i)) {
			this._swap(i, par);
			i = par;
		}
	}

	_swap(index, parentIndex) {
		let parentVal = this.heap[parentIndex];
		let val = this.heap[index];

		this.heap[parentIndex] = val;
		this.heap[index] = parentVal;
	}

	heapifyDown() {
		return;
	}

	buildMaxHeap(array) {
		return array;
	}

	print() {
		console.log(this.heap);
	}

};
