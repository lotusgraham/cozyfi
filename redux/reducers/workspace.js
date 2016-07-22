var update = require('react-addons-update');

const initialState = {
	placeIdCache: [],
    placeId: null,
	workspaceSaved: false
};

const workspaceReducer = (state, action) => {
	state = state || initialState;
    // if (action.type ==='GET_WORKSPACES_SUCCESS') {
    //     let newState = update(state, {
    //         placeIdCache: {$push: [action.workspaces]}
    //     });
    // }
    if (action.type === 'ADD_WORKSPACE_SUCCESS') {
        let newState = update(state, {
            placeIdCache: { $push: [action.workspace]},
            workspaceSaved: { $set:true }
        });
        state = newState;
	}
    if (action.type === 'REMOVE_WORKSPACE_SUCCESS') {
        let newState = update(state, {
            placeIdCache: {$splice: [[action.index, 1]]}
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
