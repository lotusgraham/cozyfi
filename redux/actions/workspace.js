var firebaseApp = require('../../js/Firebase.jsx');

const addWorkspaceSuccess = (workspace) => {
	return {
		type: 'ADD_WORKSPACE_SUCCESS',
        workspace: workspace
	};
};

function addWorkspace(workspace) {
	return function(dispatch) {
        let workspacesRef = firebaseApp.ref('/workspaces/');
        let testContent = {
    "Google Places": "AvalancheCafe",
    "hasWifi": false,
    "hasCaffeine": false,
    "hasFood": false,
    "hasOutlets": true,
    "hasTableSpace": true,
    "hasOutdoorSpace": false,
    "isQuiet": false,
    "quirks": "quirky",
    "perks": "perky",
    "directions": "directy"
}
			dispatch(addWorkspaceSuccess(testContent));
            workspacesRef.push(testContent);

	}
}


exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;
