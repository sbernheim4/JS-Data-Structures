const Queue = require('../Queue.js');

let q = new Queue();

test('queue is empty', () => {
	expect(q.size()).toBe(0);
});

test('isEmpty is true', () => {
	expect(q.isEmpty()).toBe(true);
});

test('dequeue error', () => {
	expect(() => {
		q.dequeue();
	}).toThrow();
});

test('peek error', () => {
	expect(() => {
		q.peek();
	}).toThrow();
});

test ('add 1 to queue', () => {
	q.enqueue(1);
	expect(q.peek()).toBe(1);
});

test ('peek is 1', () => {
	q.enqueue(2);
	expect(q.peek()).toBe(1);
});

test ('size of queue is 2', () => {
	expect(q.size()).toBe(2);
});

test('isEmpty is false', () => {
	expect(q.isEmpty()).toBe(false);
});
