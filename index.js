//import the modules we are going to use
const {initModel} = require('./model');
const {update} = require('./update');
const {view} = require('./view');
const {app} = require('./app');

//this is the state of the app, its a dictionary that have the model and the view, the app will update this state
const state = {
    model: initModel,
    currentView: view(initModel)
}

//we call the app (in the main)
app(state, update, view);