var addWorkspaceSuccess = require('../actions/workspace').addWorkspaceSuccess;
var addWorkspace = require('../actions/workspace').addWorkspace;
var update = require('react-addons-update');

const initialState = {
	currentWorkspaces: [],
	workspaceSaved: false,
    GooglePlaces: null,
    hasFastWifi: null,
    hasCaffeine: null,
    hasTableSpace: null,
	hasOutdoorSpace: null,
    isQuiet: null,
    quirks: null,
    perks: null,
    directions: null
};

const workspaceReducer = (state, action) => {
	state = state || initialState;
    if (action.type === 'ADD_WORKSPACE_SUCCESS') {
        console.log (action.workspace);
        let newState = update(state, {
            currentWorkspaces: { $push: [action.workspace]},
            workspaceSaved: { $set:true },
            GooglePlaces: { $set:action.workspace.Google_Places },
            hasFastWifi: { $set:action.workspace.hasWifi },
            hasCaffeine: { $set:action.workspace.hasCaffeine} ,
            hasTableSpace: { $set:action.workspace.hasTableSpace },
            hasOutdoorSpace: { $set:action.workspace.hasOutdoorSpace },
            isQuiet: { $set:action.workspace.isQuiet},
            quirks: { $set:action.workspace.quirks },
            perks: { $set:action.workspace.perks },
            directions: { $set:action.workspace.directions }
        });
        state = newState;
        console.log(state);
    }
    return state;
};

module.exports = workspaceReducer;
