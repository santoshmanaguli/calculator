import { question } from "readline-sync";

function main(): void{
    const firstStr: string = question('Enter the desired number:');
    const secondStr: string = question('Enter the second number:');
    console.log(firstStr+secondStr);
}

main();