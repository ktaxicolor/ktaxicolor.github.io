var videoController = function($scope, $sce, $log, VideoVotes) {
  
	$scope.videos = VideoVotes;
  
	//Display : populate video list with youtube id from firebase DB and order by vote
	$scope.trustSrc = function(id) {
		//make an url with youtube id
		urlVideo = "https://www.youtube.com/embed/"+id+"?autoplay=0";
		
		//TODO investigate why program pass through here 3 times 
		//$log.info("url : "+urlVideo);
		
		return $sce.trustAsResourceUrl(urlVideo);
	};
  
	//Vote : manage vote on a video (sync in DB)
    $scope.upVote = function(video)
	{
		video.$value +=1;
		$scope.videos.$save(video);
	};
	$scope.downVote = function(video)
	{
		if(video.$value>0)
		{
			video.$value-=1;
		}
		$scope.videos.$save(video);
	};

  //Add a video : 
  //get video ID from url to add in firebase
/*
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
      $log.Error("getIdFromYtUrl expects a string");
    }
	
    // remove the '-nocookie' flag from youtube urls
    urlString = urlString.replace('-nocookie', '');

    return getYoutubeID(urlString);
  }
*/
  

};