newapp.controller('mainController', function($scope,$interval,$location,$window,$routeParams,$http,$rootScope) {
	console.log("mainController created");
	$scope.templates = [{
        name: 'views/header.html',
        url: 'views/header.html'}
        ];
    $scope.footer = [{
        name: 'views/footer.html',
        url: 'views/footer.html'}
        ];
    $scope.sidepanel = [{
        name: 'views/sidepanel.html',
        url: 'views/sidepanel.html'}
        ];
    $scope.template = $scope.templates[0];
    $scope.template1 = $scope.footer[0];
    $scope.template2 = $scope.sidepanel[0];
    $scope.doctor={
        name: 'views/doctor.html',
        url: 'views/doctor.html'};
    $scope.appointment={
        name: 'views/appointment.html',
        url: 'views/appointment.html'};
    $scope.settings={
        name: 'views/settings.html',
        url: 'views/settings.html'};
    $scope.demo={
        name: 'views/demo.html',
        url: 'views/demo.html'};
    $scope.demo1={
        name: 'views/demo1.html',
        url: 'views/demo1.html'};
	$scope.currentpage="demo";

	$scope.navigate=function(page){
		$scope.currentpage=page;
	}
});