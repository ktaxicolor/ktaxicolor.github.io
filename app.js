(function(){

var config = {
    apiKey: "AIzaSyBrOOffhUOYwsayaZlh6g9NgHqc9ftX6Ds",
    authDomain: "subtitle-hub-demo.firebaseapp.com",
    databaseURL: "https://subtitle-hub-demo.firebaseio.com",
    storageBucket: "subtitle-hub-demo.appspot.com",
    messagingSenderId: "263403456891"
  };
  firebase.initializeApp(config);


app.factory('VideoVotes', ['$firebaseArray', 
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = firebase.database().ref();

    return $firebaseArray(ref);
  }
]);

	app.controller("videoController", videoController);//['$scope', '$log', '$sce','videoVotes']);
}());
