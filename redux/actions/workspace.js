var firebaseApp = require('../../js/Firebase.jsx');
require('isomorphic-fetch');

const saveMapPlaceSuccess = (place) => {
    return {
        type: 'SAVE_MAP_PLACE_SUCCESS',
        place
    }
}

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

// exports.saveMapPlace = saveMapPlace;
exports.saveMapPlaceSuccess = saveMapPlaceSuccess;

exports.setCurrentPlace = setCurrentPlace;

exports.getWorkspaces = getWorkspaces;
exports.getWorkspacesSuccess = getWorkspacesSuccess;

exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;

exports.removeWorkspace = removeWorkspace;
exports.removeWorkspaceSuccess = removeWorkspaceSuccess;
