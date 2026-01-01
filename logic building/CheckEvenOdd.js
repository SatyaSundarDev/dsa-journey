function CheckEvenOdd(num){
    if(typeof num !== "number" || isNaN(num)){
        return "Invalid Input"
    }
    return num %2 === 0 ? "Even" : "Odd"
}

let result = CheckEvenOdd(15)
console.log(result);


/*  Node.js Style

const { log } = require('console');
const { checkPrime } = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function CheckEvenOdd(num){
    if(!Number.isInteger(num)){
        return "Invalid Input"
    }

    return num % 2 ===0 ? "Even" : "Odd";
}

rl.question("Enter a number: ", (input) => {
    const num = Number(input)
    console.log(CheckEvenOdd(num));
    rl.close()
    
})

*/
