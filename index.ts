import { question } from "readline-sync";

type Operator = '+' | '/' | '-' | '*'

function main(): void{
    const firstStr: string = question('Enter the desired number:');
    const operator: string = question('Enter operator:')
    const secondStr: string = question('Enter the second number:');

    const isValid: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (isValid) {
        const result = calculate(firstStr, operator as Operator, secondStr );
        console.log(result);
    } else {
        console.log('not valid input');
        main();
    }
}

function calculate(firstStr: string, operator: Operator, secondStr: string){
    const first  = parseInt(firstStr);
    const second = parseInt(secondStr);
    switch (operator) {
        case '+':
            return first + second
        case '-':
            return first - second
        case '/':
            return first / second
        case '*':
            return first * second
    }
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