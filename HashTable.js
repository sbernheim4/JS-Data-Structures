module.exports = class HashTable {


	constructor(max = 50) {
		this.numElements = 0;
		this.maxSize = max;
		this.hashTable = new Array(max);
		Object.seal(this.hashTable);
	}


	hOne(val) {
		const rand = (Math.sqrt(5) - 1)/2;
		return Math.floor(this.totalCapacity()/2 * ((val * rand) - Math.floor(val * rand)));
	}

	hTwo(val) {
		const rand = (Math.sqrt(5) - 1)/2;
		return Math.floor(this.totalCapacity()/2 + Math.floor(this.totalCapacity()/2*((val * rand) - Math.floor(val * rand))));
	}

	totalCapacity() {
		return this.maxSize;
	}

	size() {
		return this.numElements;
	}

	insert(obj) {
		let detectCycle = -1;
		this._insert(obj, this.hOne(obj.key), detectCycle);
		this.numElements++;
		this.performRehash(false);
	}

	_insert(obj, hashedValue, detectCycle) {

		if (hashedValue === detectCycle) {
			this.performRehash(true);
		}

		if (this.hashTable[hashedValue] === undefined) {
			console.log(`-----Simple Case-----`);
			this.hashTable[hashedValue] === obj;
		} else if(this.hashTable[this.hTwo(this.hashTable[hashedValue].key)] === undefined) {
			console.log(`-----Something is in hOne of ${obj}`);
			const oldObject = this.hashTable[hashedValue];
			this.hashTable[this.hOne(obj.key)] = obj;
			this.hashTable[this.hTwo(oldObject.key)] = oldObject;
		} else if (this.hashTable[hashedValue] !== obj.key) {
			console.log(`-----Complex Case-----`);
			let old = JSON.stringify(this.hashTable[hashedValue]);
			this.hashTable[hashedValue] = obj;
			this._insert(old, this.hTwo(old.key), this.hTwo(old.key));
		}
		console.log(this);
	}


	performRehash(forced) {
		const loadFactor = this.size()/this.totalCapacity();

		if (loadFactor >= .5 || forced) {
			console.log(`----Performing Rehash----`);
			let copy = this.hashTable;

			this.hashTable = new Array(this.totalCapacity() * 2);
			Object.seal(this.hashTable);
			this.numElements = 0;

			copy.forEach(val => {
				if (val !== null && val !== undefined) {
					this.insert(val);
				}
			});
		}
	}

};
