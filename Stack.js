module.exports = class Stack {

	constructor() {
		this.size = 0;
		this.stack = [];
	}

	isEmpty() {
		return this.size === 0;
	}

	peek() {
		if (this.isEmpty()) {
			throw 'Stack is empty, cannot peek';
		}

		return this.stack[this.size-1];
	}

	pop() {
		if (this.isEmpty()) {
			throw 'Stack is empty, cannot pop';
		}
		this.stack.splice(this.size-1, 1);
		this.size -= 1;
	}

	push(val) {
		this.stack.push(val);
		this.size += 1;
	}

	search(val) {
		this.stack.forEach(element => {
			if (element === val) {
				return true;
			}
		});
		return false;
	}

	size() {
		return this.size;
	}
};

