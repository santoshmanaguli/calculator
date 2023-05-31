"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter the desired number:');
    var operator = (0, readline_sync_1.question)('Enter operator:');
    var secondStr = (0, readline_sync_1.question)('Enter the second number:');
    var isValid = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (isValid) {
        var result = calculate(firstStr, operator, secondStr);
        console.log(result);
    }
    else {
        console.log('not valid input');
        main();
    }
}
function calculate(firstStr, operator, secondStr) {
    var first = parseInt(firstStr);
    var second = parseInt(secondStr);
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '/':
            return first / second;
        case '*':
            return first * second;
    }
}
function isNumber(str) {
    var num = parseInt(str);
    var isNum = !isNaN(num);
    return isNum;
}
function isOperator(op) {
    return op === '+' || op === '*' || op === '/' || op === '-';
}
main();
