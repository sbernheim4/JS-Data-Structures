const Stack = require('../Stack.js');

let s = new Stack();

test('stack is empty', () => {
	expect(s.size()).toBe(0);
});

