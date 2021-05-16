const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { initModel } = require('./model');

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {billAmount} = model;
    const {tip} = model;
    const {percentage} = model;
    const {total} = model;

    return [
        {"Bill Amount": "$"+billAmount,
        "Tip (%)": percentage+"%",
        "Tip": "$"+tip,
        "total": "$"+total}
    ]
}

function inputForm(model){
    const {input} = model;
    const messageBill = "Bill Amount?";
    const messageTip = "Tip(%)?";
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: messageBill,
            default: input,  
        },
        {
            name: "input",
            type: "input",
            message: messageTip,
            default: input,
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm
}