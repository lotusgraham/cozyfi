var addWorkspaceSuccess = require('./redux/actions/workspace.js').addWorkspaceSuccess;
var addWorkspace = require('./redux/actions/workspace.js').addWorkspace;
var reducer = require('./redux/reducers/workspace.js');
var store = require('./redux/store.js');
var setCurrentPlace = require('./redux/actions/workspace.js').setCurrentPlace;

let testContent = {
    "name": "A Place",
    "desc": "A desc"
};

let testPlace = {
    "place": "Elias Middle of Nowhere"
}

// store.dispatch(addWorkspace(testContent));
store.dispatch(setCurrentPlace(testPlace));
