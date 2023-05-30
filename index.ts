import { question } from "readline-sync";

function main(): void{
    const firstStr: string = question('Enter the desired number:');
    const operator: string = question('Enter operator:')
    const secondStr: string = question('Enter the second number:');

    const isValid: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    console.log(isValid);
}

function isNumber(str: string): boolean{
    const num: number = parseInt(str);
    const isNum: boolean = !isNaN(num);
    return isNum
}

function isOperator(op: string): boolean{
    return op === '+' || op === '*' || op === '/' || op === '-'
}

main();