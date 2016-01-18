// Including modules in Node:
var path = require("path");

var hello = "Hello from node.js";
var justNode = hello.slice(17);

// Using variables inside stringa using backtick ${var}:
console.log(`Rock in world from ${justNode}`);
// Path to the directory
console.log(__dirname);
// Full path to the file
console.log(__filename);
// Using 'paht' module on top getting base name of this file
console.log(`Rock in world from ${path.basename(__filename)}`);