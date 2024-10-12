const HashMap = require("./models/HashMap");
const util = require("util");

const hashmap = new HashMap();

const hashed1 = hashmap.hash("Kucing");
const hashed2 = hashmap.hash("cingKu");
const hashed3 = hashmap.hash("Babi");
const hashed4 = hashmap.hash("BaBi");

console.log(hashed1);
console.log(hashed2);
console.log(hashed3);
console.log(hashed4);

// 12
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

console.log(hashmap.get("dog"));
console.log(hashmap.get("zebra"));
console.log(hashmap.get("hat"));

console.log(hashmap.remove("grape"));
console.log(hashmap.remove("zebra"));
console.log(hashmap.remove("dog"));

console.log(util.inspect(hashmap, { depth: null }));
