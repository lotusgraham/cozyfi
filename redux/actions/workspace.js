var firebaseApp = require('../../js/Firebase.jsx');
require('isomorphic-fetch');

const setCurrentPlace = (place) => {
    return {
        type: 'SET_CURRENT_PLACE',
        placeId: place.placeId,
        lat: place.lat,
        lng: place.lng
    }
}


const fetchWorkspaceData = (filterParams) => {
    return (dispatch) => {
        let placesArray = []
        let workspacesRef = firebaseApp.ref('/workspaces/');
        workspacesRef.once('value').then(snapshot => {
        const data = snapshot.val();
        const workspaces = Object.keys(data).map(key => data[key]);
            dispatch(fetchMapData(workspaces));
        });

        //creates new instance of GeoFire
        let firebaseRef = firebaseApp.ref('geoFire');
        let geoFire = new GeoFire(firebaseRef);
        var geoQuery;

        //creates an unordered list of workspaces
        $ul

    }
}

const fetchMapData = (workspaces) => {
    return (dispatch, getState) => {
        let service = getState().placesService;
        let mergedWorkspaces = [];
        let count = workspaces.length

        for (var i = 0; i < workspaces.length; i +=1) {
            var request = {
                placeId: workspaces[i].placeId
            }
            service.getDetails(request, function(workspace, place, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    var workspaceWithGData =
                        Object.assign({}, workspace, {googleData: place});
                    mergedWorkspaces.push(workspaceWithGData);
                    count --;
                }
                if (count === 0){
                    dispatch(updateWorkspaceCache(mergedWorkspaces));
                }
            }.bind(null, workspaces[i]));
        }
    }
}

const updateWorkspaceCache = (workspaces) => {
    return {
        type: 'UPDATE_WORKSPACE_CACHE',
        workspaces
    }
}

const addWorkspace = (workspace) => {
    return function(dispatch) {
        let workspacesRef = firebaseApp.ref('/workspaces/');
        dispatch(addWorkspaceSuccess(workspace));
        workspacesRef.push(workspace);

        // let geoFire = new GeoFire(workspacesRef);
        // geoFire.push(workspace);
        console.log("AAGASAASSAGAGA", workspace.lng);
        console.log("agajghajgagka", workspace.lat);
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

const getUserLoc = function() {
    return function(dispatch, getState) {
        const getUserLocSuccess = function (dispatch, position) {
            let userLoc = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            dispatch(updateUserLoc(userLoc))
    }
    navigator.geolocation.getCurrentPosition(getUserLocSuccess.bind(this, dispatch));
    }
}


const updateUserLoc = (userLoc) => {
    return {
        type: 'UPDATE_USER_LOC',
        userLoc
    }
}




exports.setCurrentPlace = setCurrentPlace;
exports.fetchWorkspaceData = fetchWorkspaceData;
exports.fetchMapData = fetchMapData;
exports.updateWorkspaceCache = updateWorkspaceCache;

exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;

exports.removeWorkspace = removeWorkspace;
exports.removeWorkspaceSuccess = removeWorkspaceSuccess;

exports.getUserLoc = getUserLoc;
exports.updateUserLoc = updateUserLoc;
