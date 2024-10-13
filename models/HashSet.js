const LinkedList = require("./LinkedList");

module.exports = class HashSet {
  buckets = [];
  #capacity = 16;
  #loadFactor = 0.8;

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }

  set(key) {
    if (this.#isBucketEmpty(key)) {
      const bucketIndex = this.hash(key);
      this.#putValueOnBucket(bucketIndex, new LinkedList());

      this.#getBucket(key).append(key);
    } else {
      const index = this.#getBucket(key).find(key);

      if (index >= 0) this.remove(key);

      this.#getBucket(key).append(key);
    }

    if (this.#getThreshold() < this.length()) this.#doubledCapacity();
  }

  get(key) {
    if (this.#isBucketEmpty(key)) return null;
    return this.#getBucket(key).contains(key) ? key : null;
  }

  remove(key) {
    if (this.#isBucketEmpty(key)) return false;

    if (!this.#getBucket(key).contains(key)) return false;

    const index = this.#getBucket(key).find(key);

    if (index >= 0 && index !== null) {
      this.#getBucket(key).removeAt(index);

      if (this.#getThreshold() / 2 > this.length()) this.#halvedCapacity();

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

  getCapacity() {
    return this.#capacity;
  }

  clear() {
    this.buckets = new Array(16);
  }

  keys() {
    const keys = [];
    this.buckets.map((bucket) => {
      if (bucket) {
        for (let i = 0; i < bucket.size(); i++) {
          keys.push(bucket.at(i));
        }
      }
    });

    return keys;
  }

  #isIndexOutOfBound(index) {
    if (index < 0 || index >= this.#capacity) {
      throw new Error("Trying to access index out of bound");
    }
  }

  #putValueOnBucket(index, value) {
    this.#isIndexOutOfBound(index);
    this.buckets[index] = value;
  }

  #bucketsAt(index) {
    this.#isIndexOutOfBound(index);
    return this.buckets[index];
  }

  #getBucket(key) {
    return this.#bucketsAt(this.hash(key));
  }

  #isBucketEmpty(key) {
    return !this.#getBucket(key);
  }

  #getThreshold() {
    return this.#loadFactor * this.#capacity;
  }

  #doubledCapacity() {
    const keys = this.keys();
    this.#capacity *= 2;
    this.clear();

    keys.forEach((key) => {
      this.set(key);
    });
  }

  #halvedCapacity() {
    const keys = this.keys();
    this.#capacity /= 2;
    this.clear();

    keys.forEach((key) => {
      this.set(key);
    });
  }
};
