var update = require('react-addons-update');

const initialState = {
	currentWorkspaces: [0,1],
    googlePlaces: [],
    currentPlace: null,
	workspaceSaved: false
};

const workspaceReducer = (state, action) => {
    console.log('here');
	state = state || initialState;
    if (action.type ==='GET_WORKSPACES_SUCCESS') {
        let newState = update(state, {
            currentWorkspaces: {$push: [action.workspaces]}
        });
    }
    if (action.type === 'ADD_WORKSPACE_SUCCESS') {
        let newState = update(state, {
            currentWorkspaces: { $push: [action.workspace]},
            workspaceSaved: { $set:true }
        });
        state = newState;
	}
    if (action.type === 'REMOVE_WORKSPACE_SUCCESS') {
        console.log('THE_ACTION=======',action)
        let newState = update(state, {
            currentWorkspaces: {$splice: [[action.index, 1]]}
        });
        console.log(newState);
    }
	if (action.type === 'SET_CURRENT_PLACE') {
		let newState = update(state, {
		currentPlace: {$set: action.place}
    });
		state = newState;
        console.log(newState);
    }
    if (action.type === 'GET_MAP_PLACE_SCCESS') {
        let newState = update(state, {
            googlePlaces: {$push: action.place}
        })
    }

    return state;
};

module.exports = workspaceReducer;
