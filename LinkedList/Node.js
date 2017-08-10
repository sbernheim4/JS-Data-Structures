module.exports = class Node {

	constructor(dataVal) {
		this.data = dataVal || null;
		this.next = null;
		this.prev = null;
	}

	getData() {
		return this.data;
	}

	setData(newVal) {
		this.data = newVal;
	}

};
