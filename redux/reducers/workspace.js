var update = require('react-addons-update');

const initialState = {
	workspaceCache: [],
    placeId: null,
    lat: null,
    lng: null,
    googleData: null,
	workspaceSaved: false,
    userLoc: null,
    placesService: new google.maps.places.PlacesService(document.createElement('div'))
}

const workspaceReducer = (state, action) => {
	state = state || initialState;
    if (action.type ==='UPDATE_WORKSPACE_CACHE') {
        let newState = update(state, {
            workspaceCache: {$set: action.workspaces}
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
		currentPlace: {$set: action.placeId},
        currentLat: {$set: action.lat},
        currentLng: {$set: action.lng},
        userLoc: {$set: {lat: action.lat, lng: action.lng}}
    });
		state = newState;
    }
    if (action.type === 'UPDATE_USER_LOC') {
        let newState = update(state, {
            userLoc: {$set: action.userLoc}
        });
        state = newState;;
    }
    return state;
};

module.exports = workspaceReducer;
