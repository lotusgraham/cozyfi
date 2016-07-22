var firebaseApp = require('../../js/Firebase.jsx');
require('isomorphic-fetch');

const getMapPlaceSuccess = (place) => {
    return {
        type: 'GET_MAP_PLACE_SCCESS',
        place
    }
}

const addWorkspaceSuccess = (workspace) => {
	return {
		type: 'ADD_WORKSPACE_SUCCESS',
		workspace
	};
};

const setCurrentPlace = (place) => {
	return {
		type: 'SET_CURRENT_PLACE',
		place
	}
}

const addWorkspace = (workspace) => {
	return function(dispatch) {
		let workspacesRef = firebaseApp.ref('/workspaces/');
		let testContent = {
			"description": "short description",
			"hasWifi": false,
			"hasCaffeine": false,
			"hasFood": false,
			"hasOutlets": true,
			"hasTableSpace": true,
			"hasOutdoorSpace": false,
			"isQuiet": false,
			"isAccessible": false,
			"quirks": "quirky",
			"perks": "perky",
			"directions": "directy"
		}
		dispatch(addWorkspaceSuccess(workspace));
		workspacesRef.push(workspace);

	}
}


exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;
exports.setCurrentPlace = setCurrentPlace;
