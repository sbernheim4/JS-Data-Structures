const Stack = require(`../Stack.js`);

let s = new Stack();

test(`size is 0 when stack is empty`, () => {
	expect(s.size()).toBe(0);
});

test(`isEmpty to be true when stack is empty`, () => {
	expect(s.isEmpty()).toBe(true);
});

test(`pop error is thrown when stack is empty`, () => {
	expect(() => {
		s.pop();
	}).toThrow();
});

test(`peek error is thrown when stack is empty`, () => {
	expect(() => {
		s.peek();
	}).toThrow();
});

test(`1 is added to stack`, () => {
	s.push(1);
	expect(s.peek()).toBe(1);
});

test(`peek is 2 when 2 is pushed onto the stack`, () => {
	s.push(2);
	expect(s.peek()).toBe(2);
});

test(`size is 2 when stack has two elements`, () => {
	expect(s.size()).toBe(2);
});

test(`isEmpty is false when stack has values`, () => {
	expect(s.size()).toBe(2);
});
