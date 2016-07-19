import 'isomorphic-fetch';

function addWorkspace(workspace) {
	return function(dispatch) {
        let postInit = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				//
			})
		}
		return fetch('/workspaces/').then(res => {
			return res.json();
		}).then(data => {
			console.log(data);
			return dispatch(addWorkspace(data))
		})
	}
}


exports.addWorkspace = addWorkspace;
