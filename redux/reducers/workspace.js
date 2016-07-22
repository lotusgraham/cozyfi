var addWorkspaceSuccess = require('../actions/workspace').addWorkspaceSuccess;
var addWorkspace = require('../actions/workspace').addWorkspace;
var update = require('react-addons-update');
var setCurrentPlace = require('../actions/workspace').setCurrentPlace;

const initialState = {
	currentWorkspaces: [],
    currentPlace: null,
	workspaceSaved: false
};

const workspaceReducer = (state, action) => {
	state = state || initialState;
    if (action.type === 'ADD_WORKSPACE_SUCCESS') {
        let newState = update(state, {
            currentWorkspaces: { $push: [action.workspace]},
            workspaceSaved: { $set:true }
        });
        state = newState;
        console.log(state);
	}
	if (action.type === 'SET_CURRENT_PLACE') {
		let newState = update(state, {
		currentPlace: {$set: action.place}
		})
		state = newState;
		console.log('SET_CURRENT_PLACE', state);
        var placeID = state.currentPlace + '';
        console.log(placeID);
        var apiKey = 'AIzaSyDEW1grx0AbwSozmAu0fi7HczQn6D0UFlQ';
        var gMaps = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeID + '&key='+ apiKey;
        console.log(gMaps);
        // 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';
        // 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyDEW1grx0AbwSozmAu0fi7HczQn6D0UFlQ';
	}
    return state;
};

module.exports = workspaceReducer;
