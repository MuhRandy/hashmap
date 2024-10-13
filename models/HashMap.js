const LinkedList = require("./LinkedList");

module.exports = class HashMap {
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

  set(key, value) {
    const storedValue = {
      key,
      value,
    };

    if (this.#isBucketEmpty(key)) {
      const bucketIndex = this.hash(key);
      this.#putValueOnBucket(bucketIndex, new LinkedList());

      this.#getBucket(key).append(storedValue);
    } else {
      const index = this.#find(key, this.#getBucketList(key));

      if (index >= 0) this.remove(key);

      this.#getBucket(key).append(storedValue);
    }

    if (this.#getThreshold() < this.length()) this.#doubledCapacity();
  }

  getCapacity() {
    return this.#capacity;
  }

  get(key) {
    if (this.#isBucketEmpty(key)) return null;

    return this.#getValueInBucket(key, this.#getBucketList(key));
  }

  remove(key) {
    if (this.#isBucketEmpty(key)) return false;

    const bucketList = this.#getBucketList(key);

    if (!this.#getValueInBucket(key, bucketList)) return false;

    const index = this.#find(key, bucketList);

    if (index >= 0) {
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

  clear() {
    this.buckets = new Array(16);
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

  #getValueInBucket(key, bucketList) {
    if (bucketList.value.key === key) return bucketList.value.value;
    if (bucketList.nextNode === null) return null;

    return this.#getValueInBucket(key, bucketList.nextNode);
  }

  #find(key, bucketList) {
    let index = 0;
    if (bucketList.value.key === key) return index;
    if (bucketList.nextNode === null) return false;
    index++;

    return index + this.#find(key, bucketList.nextNode);
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

  #getBucketList(key) {
    return this.#getBucket(key).list;
  }

  #isBucketEmpty(key) {
    return !this.#getBucket(key);
  }

  #getThreshold() {
    return this.#loadFactor * this.#capacity;
  }

  #doubledCapacity() {
    const entries = this.entries();
    this.#capacity *= 2;
    this.clear();

    entries.forEach((entry) => {
      this.set(entry[0], entry[1]);
    });
  }

  #halvedCapacity() {
    const entries = this.entries();
    this.#capacity /= 2;
    this.clear();

    entries.forEach((entry) => {
      this.set(entry[0], entry[1]);
    });
  }
};
