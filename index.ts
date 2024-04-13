#! /usr/bin/env node 

import inquirer from "inquirer"

const currency:any = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.75,
    INR: 74.57,
    PKR: 280,
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter amount",
        type: "number",
    }
]);

let fromAmount = currency[user_input.from]
let toAmount = currency[user_input.to]
let amount = user_input.amount

let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount);
