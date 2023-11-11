const fs = require("fs");
const path = require("path");

const firstPath = path.resolve("content", "welcome.txt");
fs.writeFileSync(firstPath, "Hello Node");
const welcome = fs.readFileSync(firstPath, "utf-8");
console.log(welcome);
