const HashMap = require("./models/HashMap");
const util = require("util");
const HashSet = require("./models/HashSet");

const hashmap = new HashMap();
const hashset = new HashSet();

// hashmap.set("apple", "red");
// hashmap.set("banana", "yellow");
// hashmap.set("carrot", "orange");
// hashmap.set("dog", "brown");
// hashmap.set("elephant", "gray");
// hashmap.set("frog", "green");
// hashmap.set("grape", "purple");
// hashmap.set("hat", "black");
// hashmap.set("ice cream", "white");
// hashmap.set("jacket", "blue");
// hashmap.set("kite", "pink");
// hashmap.set("lion", "golden");

// console.log(util.inspect(hashmap, { depth: null }));
// console.log("length:", hashmap.length());

// console.log("\n");

// console.log('get item with "grape" key:', hashmap.get("grape"));
// console.log('remove item with "grape" key:', hashmap.remove("grape"));
// console.log('get item with "grape" key:', hashmap.get("grape"));

// console.log("\n");

// console.log('get item with "zebra" key:', hashmap.get("zebra"));
// console.log('remove item with "zebra" key:', hashmap.remove("zebra"));

// console.log("\n");

// console.log('get item with "dog" key:', hashmap.get("dog"));
// console.log('remove item with "dog" key:', hashmap.remove("dog"));
// console.log('get item with "dog" key: ', hashmap.get("dog"));

// console.log("\n");

// console.log('get item with "elephant" key:', hashmap.get("elephant"));
// console.log(
//   'set value with already exist key "elephant"',
//   hashmap.set("elephant", "new one")
// );
// console.log('get item with "elephant" key:', hashmap.get("elephant"));

// console.log("\n");

// console.log("length:", hashmap.length());
// console.log(util.inspect(hashmap, { depth: null }));

// console.log("\n");

// console.log("get items key:", hashmap.keys());
// console.log("get items value:", hashmap.values());
// console.log("get items entry:", hashmap.entries());

// hashmap.set("new first", "value of new first");
// hashmap.set("new second", "value of new second");
// hashmap.set("new third", "value of new third");

// console.log("\n");

// console.log("capacity:", hashmap.getCapacity());
// console.log("length", hashmap.length());
// console.log(util.inspect(hashmap, { depth: null }));

// console.log("\n");

// hashmap.remove("new second");
// console.log("capacity:", hashmap.getCapacity());
// console.log("length", hashmap.length());
// console.log(util.inspect(hashmap, { depth: null }));

hashset.set("apple");
hashset.set("banana");
hashset.set("carrot");
hashset.set("dog");
hashset.set("elephant");
hashset.set("frog");
hashset.set("grape");
hashset.set("hat");
hashset.set("ice cream");
hashset.set("jacket");
hashset.set("kite");
hashset.set("lion");

console.log(util.inspect(hashset, { depth: null }));
console.log("length:", hashset.length());

console.log("\n");

console.log('get item with "grape" key:', hashset.get("grape"));
console.log('remove item with "grape" key:', hashset.remove("grape"));
console.log('get item with "grape" key:', hashset.get("grape"));

console.log("\n");

console.log('get item with "zebra" key:', hashset.get("zebra"));
console.log('remove item with "zebra" key:', hashset.remove("zebra"));

console.log("\n");

console.log('get item with "dog" key:', hashset.get("dog"));
console.log('remove item with "dog" key:', hashset.remove("dog"));
console.log('get item with "dog" key: ', hashset.get("dog"));

console.log("\n");

console.log('get item with "elephant" key:', hashset.get("elephant"));
console.log(
  'set value with already exist key "elephant"',
  hashset.set("elephant")
);
console.log('get item with "elephant" key:', hashset.get("elephant"));

console.log("\n");

console.log("length:", hashset.length());
console.log(util.inspect(hashset, { depth: null }));

console.log("\n");

console.log("get items key:", hashset.keys());

hashset.set("new first", "value of new first");
hashset.set("new second", "value of new second");
hashset.set("new third", "value of new third");

console.log("\n");

console.log("capacity:", hashset.getCapacity());
console.log("length", hashset.length());
console.log(util.inspect(hashset, { depth: null }));

console.log("\n");

hashset.remove("new second");
console.log("capacity:", hashset.getCapacity());
console.log("length", hashset.length());
console.log(util.inspect(hashset, { depth: null }));
