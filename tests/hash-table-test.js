const HashTable = require(`../HashTable.js`);

const h = new HashTable(6);


let a = {key: 1, value: `sam`};

let b = {key: 4, value: `sam`};

let c = {key: 2, value: `sam`};

let d = {key: 3, value: `sam`};

h.insert(a);

h.insert(b);

h.insert(c);

h.insert(d);
