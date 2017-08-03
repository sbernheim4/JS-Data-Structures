module.exports = class Stack {

	constructor() {
		this.size = 0;
		this.stack = [];
	}

	empty() {
		return this.size === 0;
	}

	peek() {
		if (!this.stack.empty()) {
			return this.stack[this.size-1]
		}
		throw `Stack is empty, cannot peek`;
	}

	pop() {
		if(this.size > 0) {
			this.stack.splice(this.size-1, 1);
			this.size -= 1;
		}

		throw `Stack is empty, cannot pop`
	}

	push(val) {
		this.size += 1;
		this.stack.push(val);
	}

	search(val) {
		this.stack.forEach(element => {
			if (element === val) {
				return true;
			}
		});
		return false;
	}
}

