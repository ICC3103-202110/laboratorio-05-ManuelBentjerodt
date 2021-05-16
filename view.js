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
    const {billAmount,percentage} = model
    return inquirer.prompt([
        {
            name: "billAmount",
            type: "number",
            message: "Bill Amount?",
            default:  billAmount
        },
        {
            name: "billTip",
            type: "number",
            message: "Tip(%)?",
            default: percentage
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