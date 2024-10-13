const LinkedList = require("./LinkedList");

module.exports = class HashMap {
  buckets = [];

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }

    return hashCode;
  }

  set(key, value) {
    const storedValue = {
      key,
      value,
    };

    if (!this.buckets[this.hash(key)]) {
      this.buckets[this.hash(key)] = new LinkedList();
      this.buckets[this.hash(key)].append(storedValue);
    } else {
      const bucket = this.buckets[this.hash(key)].list;
      const index = this.#find(key, bucket);

      if (index >= 0) this.remove(key);

      this.buckets[this.hash(key)].append(storedValue);
    }
  }

  get(key) {
    if (!this.buckets[this.hash(key)]) return null;

    const bucket = this.buckets[this.hash(key)].list;

    return this.#getValueInBucket(key, bucket);
  }

  remove(key) {
    if (!this.buckets[this.hash(key)]) return false;

    const bucket = this.buckets[this.hash(key)].list;

    if (!this.#getValueInBucket(key, bucket)) return false;

    const index = this.#find(key, bucket);

    if (index >= 0) {
      this.buckets[this.hash(key)].removeAt(index);
      return true;
    }

    return false;
  }

  length() {
    let total = 0;
    this.buckets.forEach((bucket) => {
      if (bucket) total += bucket.size();
    });

    return total;
  }

  clear() {
    this.buckets = [];
  }

  keys() {
    const keys = [];
    this.buckets.map((bucket) => {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          keys.push(bucket.at(i).key);
        }
      }
    });

    return keys;
  }

  values() {
    const values = [];
    this.buckets.map((bucket) => {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          values.push(bucket.at(i).value);
        }
      }
    });

    return values;
  }

  entries() {
    const entries = [];

    this.buckets.map((bucket) => {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          entries.push([bucket.at(i).key, bucket.at(i).value]);
        }
      }
    });

    return entries;
  }

  #getValueInBucket(key, bucket) {
    if (bucket.value.key === key) return bucket.value.value;
    if (bucket.nextNode === null) return null;

    return this.#getValueInBucket(key, bucket.nextNode);
  }

  #find(key, bucket) {
    let index = 0;
    if (bucket.value.key === key) return index;
    if (bucket.nextNode === null) return false;
    index++;

    return index + this.#find(key, bucket.nextNode);
  }
};
