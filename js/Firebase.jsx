var firebase = require('firebase/app');
require("firebase/auth");
require("firebase/database");
console.log(firebase);


var config = {
  apiKey: "AIzaSyBRPTZj2zc0cP01-4icR9TEma70maoNF1I",
  authDomain: "cozyfi-963e1.firebaseapp.com",
  databaseURL: "https://cozyfi-963e1.firebaseio.com",
  storageBucket: "",
};

var firebaseApp = firebase.initializeApp(config);

module.exports = firebaseApp.database();
