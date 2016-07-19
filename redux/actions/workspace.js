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
            "name": "A Place",
            "desc": "A desc"
        };
			dispatch(addWorkspaceSuccess(data));
            quotesRef.push(testContent);

	}
}


exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;
