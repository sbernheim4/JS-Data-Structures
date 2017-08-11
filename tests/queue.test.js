const Queue = require('../Queue.js');

let q = new Queue();

test('queue is empty', () => {
	expect(q.size()).toBe(0);
});

test('dequeue error', () => {
	expect(q.dequeue().toBeAnError('Queue is empty, cannot dequeue'));
});

test ('add 1 to q', () => {
	q.enqueue(1);
	expect(q.peek()).toBe(1);
});

test ('1 should be first', () => {
	q.enqueue(2);
	expect(q.peek()).toBe(1);
});

test ('size of queue is 2', () => {
	expect(q.size()).toBe(2);
});
