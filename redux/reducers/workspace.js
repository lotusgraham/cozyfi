var update = require('react-addons-update');

const initialState = {
	workspaceCache: [],
    placeId: null,
    placeData: null,
	workspaceSaved: false
};

const workspaceReducer = (state, action) => {
	state = state || initialState;
    if (action.type ==='GET_WORKSPACES_SUCCESS') {
        let newState = update(state, {
            workspaceCache: {$push: action.workspaces}
        });
        state = newState;
    }
    if (action.type === 'ADD_WORKSPACE_SUCCESS') {
        let newState = update(state, {
            workspaceSaved: { $set:true }
        });
        state = newState;
	}
    if (action.type === 'REMOVE_WORKSPACE_SUCCESS') {
        let newState = update(state, {
            workspaceCache: {$splice: [[action.index, 1]]}
        });
    }
	if (action.type === 'SET_CURRENT_PLACE') {
		let newState = update(state, {
		currentPlace: {$set: action.placeId}
    });
		state = newState;
    }
    if (action.type === 'SAVE_MAP_PLACE_SUCCESS') {
        let newState = update(state, {
            placeData: {$set: action.place}
        });
        state = newState;
    }
    return state;
};

module.exports = workspaceReducer;
