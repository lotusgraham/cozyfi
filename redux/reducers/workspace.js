import * as actions from '../actions/workspace';
import update from 'react-addons-update';

const initialState = {
	currentWorkspaces: [],
	workspaceSaved: false,
	workspaceTitle: null,
	workspaceDesc: null
}

const workspaceReducer = (state, action) => {
	state = state || initialState;
	if (action.type === 'ADD_WORKSPACE_SUCCESS') {
		let newState = update(state, {
			workspaceSaved: {
				$set: true
			}
		});
        state = newState;
	}
    if (action.type === 'STORE_WORKSPACE') {
        let newState = update(state {
            $set: {
                workspaceTitle: action.workspaceTitle,
                workspaceDesc: action.workspaceDesc
            }
        });
        state = newState;
    }
    return state;
};

module.exports = workspaceReducer;
