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

const getWorkspaces = (filterParams) => {
    return (dispatch) => {
        let workspacesRef = firebaseApp.ref('/workspaces/');
        workspacesRef.once('value').then(snapshot => {
            const data = snapshot.val();
            const workspaces = Object.keys(data).map(key => data[key]);
            console.log(workspaces);
            dispatch(getWorkspacesSuccess(workspaces));
        });
    }
}

const getWorkspacesSuccess = (workspaces) => {
    return {
        type: 'GET_WORKSPACES_SUCCESS',
        workspaces
    }
}

const addWorkspace = (workspace) => {
	return function(dispatch) {
		let workspacesRef = firebaseApp.ref('/workspaces/');
		dispatch(addWorkspaceSuccess(workspace));
		workspacesRef.push(workspace);

	}
}

const removeWorkspace = (workspaceId, workspaceIndex) => {
    return function(dispatch) {
        let workspaceRef = firebaseApp.ref('/workspaces/').child(workspaceId);
        workspaceRef.remove().then(() => {
            dispatch(removeWorkspaceSuccess(workspaceIndex));
        })

    }
};

const removeWorkspaceSuccess = (index) => {
    return {
        type: 'REMOVE_WORKSPACE_SUCCESS',
        index
    }
};

exports.getMapPlace = getMapPlace;
exports.getMapPlaceSuccess = getMapPlaceSuccess;

exports.getWorkspaces = getWorkspaces;
exports.getWorkspacesSuccess = getWorkspacesSuccess;

exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;

exports.removeWorkspace = removeWorkspace;
exports.removeWorkspaceSuccess = removeWorkspaceSuccess;

exports.setCurrentPlace = setCurrentPlace;
