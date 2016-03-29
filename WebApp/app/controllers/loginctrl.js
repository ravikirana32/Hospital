newapp.controller('loginController', function($scope,$interval,$location,$window,$routeParams,$http,$rootScope) {
	console.log("loginController created");

	$scope.login=function(){
		console.log("inside login");
		$location.url("/main");
	}
    
});