var firebaseApp = require('../../js/Firebase.jsx');
require('isomorphic-fetch');

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
            dispatch(fetchMapData(workspaces));
        });
    }
}

const fetchMapData = (workspaces) => {
    return (dispatch, getState) => {
        let service = getState().placesService;
        let mergedWorkspaces = [];

        for (var i = 0; i <= workspaces.length; i +=1) {
            var request = {
                placeId: workspaces[i].placeId,
                workspace: workspaces[i]
            }
            service.getDetails(request, (place, status) => {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    let workspaceWithGData =
                        Object.assign({}, request.workspace, {googleData: place});
                    mergedWorkspaces.push(workspaceWithGData);
                }
                dispatch(updateWorkspaceCache(mergedWorkspaces));
            });
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

exports.setCurrentPlace = setCurrentPlace;
exports.fetchWorkspaceData = fetchWorkspaceData;
exports.fetchMapData = fetchMapData;
exports.updateWorkspaceCache = updateWorkspaceCache;

exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;

exports.removeWorkspace = removeWorkspace;
exports.removeWorkspaceSuccess = removeWorkspaceSuccess;
