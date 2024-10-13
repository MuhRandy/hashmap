const Node = require("./Node");

module.exports = class LinkedList {
  list = null;

  append(value, list = this.list) {
    const node = new Node(value);

    if (list === null) this.list = node;
    else if (list.nextNode === null) list.nextNode = node;
    else this.append(value, list.nextNode);
  }

  prepend(value) {
    const list = this.list;
    this.list = new Node(value);
    this.list.nextNode = list;
  }

  size(list = this.list) {
    let total = 0;

    if (list === null) return total;
    total++;

    return total + this.size(list.nextNode);
  }

  head() {
    if (this.list === null) return null;
    return new Node(this.list.value);
  }

  tail(list = this.list) {
    if (this.list === null) return null;
    if (list.nextNode === null) return list;

    return this.tail(list.nextNode);
  }

  at(index, list = this.list) {
    if (this.size() + 1 < index) return "Index bigger than linked list size";
    if (index < 0) return "Invalid Index";
    if (index === 0) return list.value;

    return this.at(index - 1, list.nextNode);
  }

  pop(list = this.list) {
    if (list === null) return;
    if (list.nextNode === null) return true;
    if (this.pop(list.nextNode)) list.nextNode = null;
  }

  contains(value, list = this.list) {
    if (list === null) return false;
    if (list.value === value) return true;
    return this.contains(value, list.nextNode);
  }

  find(value, list = this.list) {
    let index = 0;
    if (list === null || (list.nextNode === null && list.value !== value))
      return null;
    if (list.value === value) return index;
    index++;

    return index + this.find(value, list.nextNode);
  }

  toString(list = this.list) {
    if (list === null) return null;

    return "( " + list.value + " )" + " -> " + this.toString(list.nextNode);
  }

  insertAt(value, index, list = this.list) {
    if (this.size() < index || index < 0) throw new Error("Invalid index");
    else if (index === 0) this.prepend(value);
    else if (index !== 1) this.insertAt(value, index - 1, list.nextNode);
    else {
      const oldCurrentList = list.nextNode;

      list.nextNode = new Node(value);
      list.nextNode.nextNode = oldCurrentList;
    }
  }

  removeAt(index, list = this.list) {
    if (this.size() <= index || index < 0) throw new Error("Invalid index");
    else if (index === 0) {
      this.list = this.list.nextNode;
    } else if (index !== 1) this.removeAt(index - 1, list.nextNode);
    else {
      list.nextNode = list.nextNode.nextNode;
    }
  }
};
