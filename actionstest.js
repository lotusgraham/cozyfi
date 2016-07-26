var addWorkspaceSuccess = require('./redux/actions/workspace.js').addWorkspaceSuccess;
var addWorkspace = require('./redux/actions/workspace.js').addWorkspace;
var removeWorkspace = require('./redux/actions/workspace.js').removeWorkspace;

var fetchWorkspaceData = require('./redux/actions/workspace.js').fetchWorkspaceData;
var reducer = require('./redux/reducers/workspace.js');
var store = require('./redux/store.js');
var setCurrentPlace = require('./redux/actions/workspace.js').setCurrentPlace;

let testContent = {
    "placeId":"ChIJ9-25gKYsDogRWBT2lu-OSi0",
    "description": "short description",
    "hasWifi": false,
    "hasCaffeine": false,
    "hasFood": false,
    "hasOutlets": true,
    "hasTableSpace": true,
    "hasOutdoorSpace": false,
    "isQuiet": false,
    "isAccessible": false,
    "quirks": "quirky",
    "perks": "perky",
    "directions": "directy"
}

store.dispatch(fetchWorkspaceData());
// store.dispatch(addWorkspace({
//     "placeId":"ChIJ7zbMpZpZwoARjbdOvuQKcn8",
//     "description": "short description",
//     "hasWifi": true,
//     "hasCaffeine": true,
//     "hasFood": true,
//     "hasOutlets": true,
//     "hasTableSpace": true,
//     "hasOutdoorSpace": true,
//     "isQuiet": true,
//     "isAccessible": true,
//     "quirks": "quirky",
//     "perks": "perky",
//     "directions": "directy"
// }));
// store.dispatch(removeWorkspace('-KNGca9relU4AIY_I8Nl', 1))
