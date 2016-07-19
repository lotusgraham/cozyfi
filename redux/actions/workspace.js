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
        let postInit = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: workspace.title,
                desc: workspace.desc
			})
		}
		return fetch('/workspaces/', postInit).then(res => {
			return res.json();
		}).then(data => {
			console.log(data);
			return dispatch(addWorkspaceSuccess(data))
		})
	}
}


exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;
