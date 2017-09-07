module.exports = class HashTable {


	constructor(max = 50) {
		this.numElements = 0;
		this.maxSize = max;
		this.hashTable = new Array(max);
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

	isEmpty() {
		return this.size() === 0;
	}

	clear() {
		this.numElements = 0;
		this.hashTable = new Array(this.totalCapacity());
	}

	containsKey(key) {
		let temp = this.get(key);
		return temp.key === key;
	}

	contains(value) {
		this.containsValue(value);
	}

	containsValue(value) {
		this.hashTable.forEach(object => {
			if (object.value === value) {
				return true;
			}
		});

		return false;
	}

	get(objKey) {
		let objOne = this.hashTable[this.hOne(objKey)];
		let objTwo = this.hashTable[this.hTwo(objKey)];

		if (objOne !== undefined && objOne.key === objKey) {
			return objOne;
		} else if (objTwo !== undefined && objTwo.key === objKey) {
			return objTwo;
		} else {
			return null;
		}
	}

	remove(objKey) {
		if (this.hashTable[this.hOne(objKey)].key === objKey) {
			this.hashTable[this.hOne(objKey)] = undefined;
		} else if (this.hashTable[this.hTwo(objKey)].key === objKey) {
			this.hashTable[this.hTwo(objKey)] = undefined;
		}
	}

	insert(obj) {
		let detectCycle = -1;
		this._insert(obj, this.hOne(obj.key), detectCycle);
		this.numElements = this.numElements + 1;
		this.rehash(false);
	}

	_insert(obj, hashedValue, detectCycle) {
		if (hashedValue === detectCycle) {
			this.rehash(true);
		}

		if (this.hashTable[hashedValue] === undefined) {
			this.hashTable[hashedValue] = obj;
		} else if(this.hashTable[this.hTwo(this.hashTable[hashedValue].key)] === undefined) {
			const oldObject = this.hashTable[hashedValue];
			this.hashTable[this.hOne(obj.key)] = obj;
			this.hashTable[this.hTwo(oldObject.key)] = oldObject;
		} else if (this.hashTable[hashedValue] !== obj.key) {
			let old = JSON.stringify(this.hashTable[hashedValue]);
			this.hashTable[hashedValue] = obj;
			this._insert(old, this.hTwo(old.key), this.hTwo(old.key));
		}
	}


	rehash(forced) {
		const loadFactor = this.size()/this.totalCapacity();

		if (loadFactor >= .6 || forced) {
			let copy = this.hashTable;

			this.hashTable = new Array(this.totalCapacity() * 2);
			this.numElements = 0;
			this.maxSize = this.totalCapacity() * 2;

			copy.forEach(val => {
				if (val !== null && val !== undefined) {
					this.insert(val);
				}
			});
		}
	}

};
