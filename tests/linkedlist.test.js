const LinkedList = require(`../LinkedList/LinkedList.js`);

let l = new LinkedList();

test(`size is 0 when list is empty`, () => {
	expect(l.size()).toBe(0);
});

test(`peek is null when list is empty`, () => {
	expect(l.peek()).toBe(null);
});

test(`remove throws error when list is empty`, () => {
	expect(() => {
		l.remove();
	}).toThrow();
});

