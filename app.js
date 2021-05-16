const {inputForm} = require('./view');
const {printTable} = require('console-table-printer');

// Impure
async function app(state, update, view){
    const {model, currentView} = state;
    const {title, table} = currentView;
    console.clear();
    console.log(title);
    printTable(table);
        
    
}

module.exports = {
    app
}