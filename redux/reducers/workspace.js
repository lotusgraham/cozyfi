var addWorkspaceSuccess = require('../actions/workspace').addWorkspaceSuccess;
var addWorkspace = require('../actions/workspace').addWorkspace;
var update = require('react-addons-update');
var setCurrentPlace = require('../actions/workspace').setCurrentPlace;

const initialState = {
    description: null,
	currentPlace: null,
	currentWorkspaces: [],
	workspaceSaved: false,
    GooglePlaces: null,
    hasFastWifi: null,
    hasCaffeine: null,
    hasTableSpace: null,
	hasOutdoorSpace: null,
    isQuiet: null,
    isAccessible: null,
    quirks: null,
    perks: null,
    directions: null
};

const workspaceReducer = (state, action) => {
	state = state || initialState;
    if (action.type === 'ADD_WORKSPACE_SUCCESS') {
        console.log (action.workspace);
        let newState = update(state, {
            description: { $set:action.workspace.description },
            currentWorkspaces: { $push: [action.workspace]},
            workspaceSaved: { $set:true },
            hasFastWifi: { $set:action.workspace.hasWifi },
            hasCaffeine: { $set:action.workspace.hasCaffeine} ,
            hasTableSpace: { $set:action.workspace.hasTableSpace },
            hasOutdoorSpace: { $set:action.workspace.hasOutdoorSpace },
            isQuiet: { $set:action.workspace.isQuiet},
            isAccessible: { $set:action.workspace.isAccessible},
            quirks: { $set:action.workspace.quirks },
            perks: { $set:action.workspace.perks },
            directions: { $set:action.workspace.directions }

        });
        state = newState;
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
