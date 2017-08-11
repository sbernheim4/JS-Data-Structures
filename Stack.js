module.exports = class Stack {

	constructor() {
		this.stackSize = 0;
		this.stack = [];
	}

	isEmpty() {
		return this.stackSize === 0;
	}

	peek() {
		if (this.isEmpty()) {
			throw(`Stack is empty, cannot peek`);
		}

		return this.stack[this.stackSize-1];
	}

	pop() {
		if (this.isEmpty()) {
			throw(`Stack is empty, cannot pop`);
		}
		this.stack.splice(this.stackSize-1, 1);
		this.stackSize -= 1;
	}

	push(val) {
		this.stack.push(val);
		this.stackSize += 1;
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
		return this.stackSize;
	}
};

