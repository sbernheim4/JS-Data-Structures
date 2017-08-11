const Queue = require('../Queue.js');

let q = new Queue();

test('size is 0 when queue is empty', () => {
	expect(q.size()).toBe(0);
});

test('isEmpty is true when queue is empty', () => {
	expect(q.isEmpty()).toBe(true);
});

test('dequeue error is thrown when queue is empty', () => {
	expect(() => {
		q.dequeue();
	}).toThrow();
});

test('peek error is thrown when queue is empty', () => {
	expect(() => {
		q.peek();
	}).toThrow();
});

test ('1 is added to queue', () => {
	q.enqueue(1);
	expect(q.peek()).toBe(1);
});

test ('peek is 1 when additional value is enqueued', () => {
	q.enqueue(2);
	expect(q.peek()).toBe(1);
});

test ('size is 2 when queue has two elements', () => {
	expect(q.size()).toBe(2);
});

test('isEmpty is false when queue has values', () => {
	expect(q.isEmpty()).toBe(false);
});
