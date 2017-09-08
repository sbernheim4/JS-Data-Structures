const HashTable = require(`../HashTable.js`);

let inititalTableSize = 3;
let table = new HashTable(inititalTableSize);

test(`size is 0 when table is empty`, () => {
	expect(table.size()).toBe(0);
});

test(`isEmpty to be true when table is empty`, () => {
	expect(table.isEmpty()).toBe(true);
});

let a = {
	key: Math.floor((Math.random()*10) + 1),
	value: `val 1`
};

let b = {
	key: Math.floor((Math.random()*10) + 1),
	value: `val 2`
};

let c = {
	key: Math.floor((Math.random()*10) + 1),
	value: `val 3`
};

let d = {
	key: Math.floor((Math.random()*10) + 1),
	value: `val 4`
};

let e = {
	key: 11,
	value: `val 5`
};

let f = {
	key: 44,
	value: `val 6`
};


test(`table has one value`, () => {
	table.insert(a);
	expect(table.size()).toBe(1);
});

test(`isEmpty is false after insertion`, () => {
	expect(table.isEmpty()).toBe(false);
	table.insert(b);
	table.insert(c);
	table.insert(d);
	table.insert(e);
	table.insert(f);
});

test(`hashtable was rehashed`, () => {
	expect(table.totalCapacity()).toBeGreaterThan(inititalTableSize);
});

test(`table containsValue method works for all entered objects a, b, c, d, e, f`, () => {
	expect(table.containsValue(a.value));
	expect(table.containsValue(b.value));
	expect(table.containsValue(c.value));
	expect(table.containsValue(d.value));
	expect(table.containsValue(e.value));
	expect(table.containsValue(f.value));
});

test(`table contains object with keys of 11 and 44`, () => {
	expect(table.get(11)).toBe(e);
	expect(table.get(44)).toBe(f);
});

test(`removal of object with key of 11 works`, () => {
	table.remove(11);
	expect(table.get(11)).toBe(null);
});

test(`clear function resets hashtable`, () => {
	table.clear();
	expect(table.size()).toBe(0);
	expect(table.isEmpty()).toBe(true);
})
