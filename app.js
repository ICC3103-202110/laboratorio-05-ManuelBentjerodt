const {inputForm} = require('./view');
const {printTable} = require('console-table-printer');

// Impure
async function app(state, update, view){
    while(true){
        const {model, currentView} = state;
        const {title, table} = currentView;
        console.clear();
        console.log(title);
        printTable(table);
        const input = await inputForm(model);
        //console.log(input);
        const updateModel = update(input,model);

        
        state = {
            model: updateModel,
            currentView: view(updateModel)
        }
    }    
}

module.exports = {
    app
}