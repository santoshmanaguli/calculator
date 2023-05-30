"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter the desired number:');
    var secondStr = (0, readline_sync_1.question)('Enter the second number:');
    console.log(firstStr + secondStr);
}
main();
