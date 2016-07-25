var update = require('react-addons-update');

const initialState = {
	workspaceCache: [],
    placeId: null,
	workspaceSaved: false
};

const workspaceReducer = (state, action) => {
	state = state || initialState;
    if (action.type ==='GET_WORKSPACES_SUCCESS') {
        console.log('=========')
        console.log(action.workspaces);
        console.log('=========')
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
