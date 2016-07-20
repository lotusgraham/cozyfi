var addWorkspaceSuccess = require('../actions/workspace').addWorkspaceSuccess;
var addWorkspace = require('../actions/workspace').addWorkspace;
var update = require('react-addons-update');

const initialState = {
	currentWorkspaces: [],
	workspaceSaved: false,
    name: null,
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
        let newState = update(state, {
            $push: {
                currentWorkspaces: action.workspace
            },
            $set: {
                workspaceSaved: true,
                name: action.workspace.name,
                hasFastWifi: action.workspace.hasWifi,
                hasCaffeine: action.workspace.hasCaffeine,
                hasTableSpace: action.workspace.hasTableSpace,
            	hasOutdoorSpace: action.workspace.hasOutdoorSpace,
                isQuiet: action.workspace.isQuiet,
                quirks: action.workspace.quirks,
                perks: action.workspace.perks,
                directions: action.workspace.directions
            }
        });
        state = newState;
    }
    return state;
};

module.exports = workspaceReducer;
