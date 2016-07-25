var firebaseApp = require('../../js/Firebase.jsx');
require('isomorphic-fetch');

const mapWorkspaces = (workspaces) => {
    return (dispatch) => {
        // nest this in a loop; perform this work on array
        let workspace = {
            "placeId":"ChIJ9-25gKYsDogRWBT2lu-OSi0",
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
            let gMapsBaseUrl = 'https://maps.googleapis.com/maps/api/place/details/json',
                query = {
                placeid:  workspace.placeId,
                key: 'AIzaSyDEW1grx0AbwSozmAu0fi7HczQn6D0UFlQ'
            },
                params = Object.keys(query)
                    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key]))
                    .join("&")
                    .replace(/%20/g, "+");
            fetch(gMapsBaseUrl + '?' + params)
                .then(res => res.json())
                .then(res => {
                    let googleData = res.result;
                    let workspaceWithGData =
                      Object.assign({}, workspace, {googleData: googleData});
                      return console.log(workspaceWithGData);
                });
    }
}

const mapWorkspaceDataSuccess = (place) => {
    return {
        type: 'GET_MAP_PLACE_SUCCESS',
        place
    }
}

const saveMapPlaceSuccess = (place) => {
    return {
        type: 'SAVE_MAP_PLACE_SUCCESS',
        place
    }
}

const setCurrentPlace = (placeId) => {
    return {
        type: 'SET_CURRENT_PLACE',
        placeId
    }
}

const fetchWorkspaceData = (filterParams) => {
    return (dispatch) => {
        let placesArray = []
        let workspacesRef = firebaseApp.ref('/workspaces/');
        workspacesRef.once('value').then(snapshot => {
        const data = snapshot.val();
        const workspaces = Object.keys(data).map(key => data[key]);
            dispatch(mapWorkspaces(workspaces));
        });
    }
}

const fetchWorkspaceDataSuccess = (workspaces) => {
    return {
        type: 'FETCH_WORKSPACE_DATA_SUCCESS',
        workspaces
    }
}

const addWorkspace = (workspace) => {
    return function(dispatch) {
        let workspacesRef = firebaseApp.ref('/workspaces/');
        dispatch(addWorkspaceSuccess(workspace));
        workspacesRef.push(workspace);

    }
};

const addWorkspaceSuccess = (workspace) => {
    return {
        type: 'ADD_WORKSPACE_SUCCESS',
        workspace
    };
};




const removeWorkspace = (workspaceId, workspaceIndex) => {
    // assumes index of array of current workspaces can be captured at dispatch time.
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

exports.mapWorkspaces = mapWorkspaces;
exports.mapWorkspacessSuccess = mapWorkspacesSuccess;

exports.setCurrentPlace = setCurrentPlace;

exports.fetchWorkspaceData = fetchWorkspaceData;
exports.fetchWorkspaceDataSuccess = fetchWorkspaceDataSuccess;

exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;

exports.removeWorkspace = removeWorkspace;
exports.removeWorkspaceSuccess = removeWorkspaceSuccess;
