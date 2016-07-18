var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers/combined');

var store = createStore(reducers.reducers, applyMiddleware(thunk));

module.exports = store;
