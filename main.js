const HashMap = require("./models/HashMap");
const util = require("util");

const hashmap = new HashMap();

hashmap.set("apple", "red");
hashmap.set("banana", "yellow");
hashmap.set("carrot", "orange");
hashmap.set("dog", "brown");
hashmap.set("elephant", "gray");
hashmap.set("frog", "green");
hashmap.set("grape", "purple");
hashmap.set("hat", "black");
hashmap.set("ice cream", "white");
hashmap.set("jacket", "blue");
hashmap.set("kite", "pink");
hashmap.set("lion", "golden");

console.log(util.inspect(hashmap, { depth: null }));
console.log("length:", hashmap.length());

console.log("\n");

console.log('get item with "grape" key:', hashmap.get("grape"));
console.log('remove item with "grape" key:', hashmap.remove("grape"));
console.log('get item with "grape" key:', hashmap.get("grape"));

console.log("\n");

console.log('get item with "zebra" key:', hashmap.get("zebra"));
console.log('remove item with "zebra" key:', hashmap.remove("zebra"));

console.log("\n");

console.log('get item with "dog" key:', hashmap.get("dog"));
console.log('remove item with "dog" key:', hashmap.remove("dog"));
console.log('get item with "dog" key: ', hashmap.get("dog"));

console.log("\n");

console.log('get item with "elephant" key:', hashmap.get("elephant"));
console.log(
  'set value with already exist key "elephant"',
  hashmap.set("elephant", "new one")
);
console.log('get item with "elephant" key:', hashmap.get("elephant"));

console.log("\n");

console.log("length:", hashmap.length());
console.log(util.inspect(hashmap, { depth: null }));

console.log("\n");

console.log("get items key:", hashmap.keys());
console.log("get items value:", hashmap.values());
console.log("get items entry:", hashmap.entries());

console.log("\n");

hashmap.clear();
console.log("hashmap after clear", hashmap);
