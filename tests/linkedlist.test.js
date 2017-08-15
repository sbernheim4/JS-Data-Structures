const LinkedList = require(`../LinkedList/LinkedList.js`);

var list = new LinkedList();

// Empty tests --> Linked list has no elements in it
test(`size is 0 when list is empty`, () => {
	expect(list.size()).toBe(0);
});

test(`peek is null when list is empty`, () => {
	expect(list.peek()).toBe(null);
});

test(`isEmpty is true when list is empty`, () => {
	expect(list.isEmpty()).toBe(true);
});

test(`remove throws error when list is empty`, () => {
	expect(() => {
		list.remove();
	}).toThrow();
});

test(`isEmpty is false when list is not empty`, () => {
	list.add(1);
	list.add(2);
	list.add(4);
	expect(list.isEmpty()).toBe(false);
});

test(`peek returns correct value`, () => {
	expect(list.peek()).toBe(list.getHead().next);
});

test(`size is 1 when one element is added to the list`, () => {
	expect(list.size()).toBe(3);
});

test(`add using invalid index throws error`, () => {
	expect(() => {
		list.add(5, list.size() + 1);
	}).toThrow();

	expect(() => {
		list.add(5, -1);
	}).toThrow();

});

test(`add invalid data throws error`, () => {
	expect(() => {
		list.add(null);
	}).toThrow();

	expect(() => {
		list.add(undefined);
	}).toThrow();
});

test(`add using index yields correct output`, () => {
	list.add(3, 2);
	expect(list.getElementAtIndex(2)).toBe(3);
});


