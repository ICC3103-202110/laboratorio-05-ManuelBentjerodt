//we import some module for aesthetic reason and the init model for show
const figlet = require('figlet');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { initModel } = require('./model');

//this function create the title
function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Tip     Calculator     App',
            {
                horizontalLayout: 'full',
                font: 'doom'
            }
        )
    )
}
//this function create the table, we return a list of dictionary, the len of the list its the number of rows
function getTable(model){
    return [
        {"Bill Amount": "$" + model.billAmount,
        "Tip (%)": model.percentage + "%",
        "Tip": "$" + model.tip,
        "Total": "$" + model.total}
    ]
}
//we ask to user 2 things, the bill amount and the percentage of tip, so we return 2 dictionarys
function inputForm(model){
    return inquirer.prompt([
        {
            name: "billAmount",
            type: "number",
            message: "Bill Amount?",
            default:  model.billAmount

        },
        {
            name: "percentage",
            type: "number",
            message: "Tip(%)?",
            default: model.percentage
        }
    ])
}

//this function return the title and the table, it pure so it doesnt print in the consol!!!
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