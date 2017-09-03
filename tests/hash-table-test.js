const HashTable = require(`../HashTable.js`);

let h = new HashTable(6);

let a = {key: 1, value: `sam`};

let b = {key: 4, value: `sam`};

let c = {key: 2, value: `sam`};

let d = {key: 3, value: `sam`};

h.insert(a);
console.log(h);

console.log(`------------------------------`);

h.insert(b);
console.log(h);

console.log(`------------------------------`);

h.insert(c);
console.log(h);

console.log(`------------------------------`);

h.insert(d);
console.log(h);

console.log(`------------------------------`);
