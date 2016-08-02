var firebaseApp = require('../../js/Firebase.jsx');
require('isomorphic-fetch');

var GeoFire = require('geofire');


let firebaseRef = firebaseApp.ref('geoFire');
let geoFire = new GeoFire(firebaseRef);


const setCurrentPlace = (place) => {
    return {
        type: 'SET_CURRENT_PLACE',
        placeId: place.placeId,
        lat: place.lat,
        lng: place.lng
    }
}


const fetchWorkspaceData = (filterParams) => {
    return (dispatch, getState) => {
        var query = geoFire.query({
             center: [getState().userLoc.lat, getState().userLoc.lng],
             radius: 80.5
         });
         var onEntered = query.on('key_entered', function(key) {
             dispatch(fetchSingleWorkspaceData(key));
        });
         query.on('ready', function() {
             onEntered.cancel();
         });
        let workspacesRef = firebaseApp.ref('/workspaces/');
        workspacesRef.once('value').then(snapshot => {
        const data = snapshot.val();
        const workspaces = Object.keys(data).map(key => data[key]);
            dispatch(fetchMapData(workspaces));
        });
    }
}

const fetchSingleWorkspaceData = (workspaceKey) => {
    return (dispatch) => {
        let workspaceRef = firebaseApp.ref('/workspaces/' + workspaceKey);
        workspaceRef.once('value').then(snapshot => {
            const data = snapshot.val();
            dispatch(fetchMapData(data));
        });
    }
}

const fetchMapData = (workspace) => {
    return (dispatch, getState) => {
        let service = getState().placesService;

        var request = {
            placeId: workspace.placeId
        }
        service.getDetails(request, function(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                var workspaceWithGData = Object.assign({}, workspace, {googleData: place});
                dispatch(updateWorkspaceCache(workspaceWithGData));
            }
        })
    }
}

const updateWorkspaceCache = (workspace) => {
    return {
        type: 'UPDATE_WORKSPACE_CACHE',
        workspace
    }
}

const addWorkspace = (workspace) => {
    return function(dispatch) {
        let workspacesRef = firebaseApp.ref('/workspaces/');
        dispatch(addWorkspaceSuccess(workspace));
        var workspaceRef = workspacesRef.push(workspace);
        geoFire.set(workspaceRef.key, [workspace.lat, workspace.lng]);
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
        return new Promise((resolve, reject) => {
            const getUserLocSuccess = function (dispatch, position) {
                let userLoc = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                dispatch(updateUserLoc(userLoc));
                resolve();
            }
            navigator.geolocation.getCurrentPosition(getUserLocSuccess.bind(this, dispatch));
        });
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
