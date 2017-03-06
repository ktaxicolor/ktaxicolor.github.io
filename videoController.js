var videoController = function($scope, $sce, $log, VideoVotes, YoutubeId) {
  
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
		video.votes +=1;
		$scope.videos.$save(video);
	};
	$scope.downVote = function(video)
	{
		if(video.votes>0)
		{
			video.votes -=1;
		}
		$scope.videos.$save(video);
	};
  
	//Add
	$scope.addNewVideo = function()
	{
		var IDToAdd = YoutubeId($scope.videoUrl);
		
		var newVideo = {
			videoId:IDToAdd,
			votes:0 //ou 1, comme elle a été ajoutée ? débattable
		};
		
		//syntaxe a verifier
		$scope.videos.$add(newVideo);
	}
  
};
  //Add a video : 
  //get video ID from url to add in firebase
/*
  
*/
