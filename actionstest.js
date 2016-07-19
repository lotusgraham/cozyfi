var addWorkspaceSuccess = require('./redux/actions/workspace.js').addWorkspaceSuccess;
var addWorkspace = require('./redux/actions/workspace.js').addWorkspace;
var reducer = require('./redux/reducers/workspace.js')
var store = require('./redux/store.js');

let testContent = {
    "name": "A Place",
    "desc": "A desc"
};

store.dispatch(addWorkspace(testContent))
