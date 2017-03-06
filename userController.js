var userController = function($scope) {

	
	//Login
	$scope.loginUser = function()
	{
		firebase.auth().signInWithEmailAndPassword($scope.userEmail, $scope.userPassword).catch(function(error) {
		//Handle Errors here.
		//$scope.errorCode = error.code;
		$scope.errorMessage = error.message;
		});

	};
	
	//Sign outer
	$scope.signOutUser = function()
	{
		firebase.auth().signOut();
	};
	
	// Authentication state
    // any time auth state changes, add the user data to scope
    firebase.auth().onAuthStateChanged(function(user) {
      $scope.user = user;
    });
	
	$scope.userEmail = "email";
	$scope.userPassword = "Password";
};