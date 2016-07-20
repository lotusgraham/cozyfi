var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

//TODO: make combined reducer when necessary
var reducer = require('./reducers/workspace');

var store = createStore(reducer, applyMiddleware(thunk));

module.exports = store;
