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

	
app.factory('YoutubeId', [
  function(){
	
	function stripParameters(str) {
		if (str.indexOf('?') > -1) {
		  return str.split('?')[0];
		}
    return str;
	}
  
	function getYoutubeID(urlString) {
	// shortcode
		var shortcode = /youtube:\/\/|https?:\/\/youtu\.be\//g;

		if (shortcode.test(urlString)) {
		  var shortcodeid = urlString.split(shortcode)[1];
		  return stripParameters(shortcodeid);
		}

		// /v/ or /vi/
		var inlinev = /\/v\/|\/vi\//g;

		if (inlinev.test(urlString)) {
			var inlineid = urlString.split(inlinev)[1];
			return stripParameters(inlineid);
		}

		// v= or vi=
		var parameterv = /v=|vi=/g;

		if (parameterv.test(urlString)) {
			var arr = urlString.split(parameterv);
			return arr[1].split('&')[0];
		}

		// embed
		var embedreg = /\/embed\//g;

		if (embedreg.test(urlString)) {
			var embedid = urlString.split(embedreg)[1];
			return stripParameters(embedid);
		}

		// user
		var userreg = /\/user\//g;

		if (userreg.test(urlString)) {
			var elements = urlString.split('/');
			return stripParameters(elements.pop());
		}

		// attribution_link
		var attrreg = /\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/;

		if (attrreg.test(urlString)) {
		  return urlString.match(attrreg)[1];
		}
	}
  
	function getIdFromYtUrl(urlString) {

		if (typeof urlString !== 'string') {
			//throw new TypeError('get-video-id expects a string');
			//TODO
			//$log.Error("getIdFromYtUrl expects a string");
			videoId = "error getIdFromYtUrl expects a string";
		}
		else
		{
			// remove the '-nocookie' flag from youtube urls
			urlString = urlString.replace('-nocookie', '');
			videoId= getYoutubeID(urlString);
		}
		
		return videoId;
	}
	
	return function(url){
		return getIdFromYtUrl(url);
	}
  }  
]);



app.controller("videoController", videoController);
app.controller("userController", userController);//['$scope', '$log', '$sce','videoVotes']);
}());
