var firebaseApp = require('../../js/Firebase.jsx');
require('isomorphic-fetch');

const getMapPlace = (placeId) => {
    return (dispatch) => {
        let gMapsBaseUrl = 'https://maps.googleapis.com/maps/api/place/details/json',
            query = {
            placed:  placeId,
            key: 'AIzaSyDEW1grx0AbwSozmAu0fi7HczQn6D0UFlQ'
        },
            params = Object.keys(query)
                .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key]))
                .join("&")
                .replace(/%20/g, "+");
        fetch(gMapsBaseUrl + '?' + params)
            .then(res => res.json())
        .then(place => {
            return dispatch(getMapPlaceSuccess(place))
        });
    }
}

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
