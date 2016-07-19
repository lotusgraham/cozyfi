import 'isomorphic-fetch';
import 'firebase';

const addWorkspaceSuccess = (workspace) => {
	return {
		type: 'ADD_WORKSPACE_SUCCESS',
        workspace: workspace
	};
};

function addWorkspace(workspace) {
	return function(dispatch) {
        let workspacesRef = firebase.database().ref('/workspaces/');
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
