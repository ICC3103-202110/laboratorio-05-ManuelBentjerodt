// import some modules we need, we dont import the state because its a parameter of the function
const {inputForm} = require('./view');
const {printTable} = require('console-table-printer');

//this is the impure part of our code, because we are printting in the console and updating our const calling the function update
async function app(state, update, view){
    while(true){ // while true is our cicle
        //these are the const that will be updating
        const {model, currentView} = state;
        const {title, table} = currentView;
        //printing the title and table
        console.clear();
        console.log(title);
        printTable(table);
        //asking user a new bill amount and tip percentage
        const input = await inputForm(model);
        //updating  our state calling the function update, first we update the model, then we can update our state
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