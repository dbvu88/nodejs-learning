var path = require("path");

console.log(`path: ${path.basename(__filename)}`);

var hello = "Hello World";
var substring = hello.slice(5);

console.log(substring);
console.log(`Hi${substring}`);
console.log(__dirname);
console.log(__filename);

console.log(process.argv);
