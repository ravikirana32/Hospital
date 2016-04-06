angular.module('starter.controllers', [])
//ngGPlacesAPI
.controller('AppCtrl', function($scope, $ionicModal, $timeout,$rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $rootScope.currentLatLong={};
  $rootScope.currentLatLong.lat=0;
  $rootScope.currentLatLong.lng=0;
  $scope.hospitalName='';
  $scope.newdata=[];
  $scope.newdata=[{"name":"H1"},{"name":"H2"},{"name":"H3"},{"name":"H4"},{"name":"H5"},{"name":"H6"}];

  $scope.getLocation=function() {
    console.log("geolocation");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
};
$scope.getLocation();
function showPosition(position) {
  console.log("showPosition");
    console.log("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude); 
    $scope.lat=position.coords.latitude;
    $scope.lon=position.coords.longitude;
    $rootScope.currentLatLong.lat=position.coords.latitude;
    $rootScope.currentLatLong.lng=position.coords.longitude;
    
    //$scope.search('hospital','hospital');//doctor,dentist,hospital
}


console.log("controller created");
    $scope.user="ravi kiran";
    $scope.loading=false;
    $scope.key='';
    //$scope.lat=12.9819373;
    //$scope.lon= 77.73341219999999;
    

    
    $scope.search=function(name,val){
      console.log($scope.rangeInKm);
        /*$ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });*/
          var rad=5000;
        $scope.slectedvalue=name;
        $scope.datas = ngGPlacesAPI.nearbySearch({latitude:$scope.lat, longitude:$scope.lon,types:[val],radius:rad}).then(
          function(data){
            console.log("INSIDE                ");
            if(data){
              console.log("data");
               console.log(data);
              
            }else{
              console.log("EMPTY");
            }
           
            
            $scope.newdata=data;
            //$scope.getDetails(data[0].reference);
            //console.log($rootScope.newdata);
            //$ionicLoading.hide();
            return data;
          }, function (response) {
          console.log("ERROR");
          console.log($scope.newdata);
          $scope.newdata=[];
        });
        //$scope.$apply();
        //console.log($scope.details);
        //var newdata=JSON.parse($scope.datas.$$state);
      //console.log(newdata);
    };


    $scope.getDetails=function(data){
    /*$ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });*/
    $scope.details = ngGPlacesAPI.placeDetails({reference:data}).then(
    function (data) {
      $scope.compltedata=data;
      $rootScope.ravi=data;
      console.log("complete data");
      console.log(data)
      //$ionicLoading.hide();
      return data;
    });
  };
  //$scope.getDetails();

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function(name) {
    $scope.hospitalName=name;
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  console.log($stateParams.hospitalName);
  $scope.currentHospitalName=$stateParams.hospitalName;
  $scope.doctors=true;
  $scope.appointments=false;
  $scope.demos=false;

  $scope.toggleView=function(view){
    console.log("hkkkhk  "+view);
    $scope.doctors=false;
    $scope.appointments=false;
    $scope.demos=false;

    if(view=="doctors"){
      $scope.doctors=true;
    }else if(view=="appointments"){
      $scope.appointments=true;
    }else if(view=="demos"){
      $scope.demos=true;
    }
    console.log($scope.doctors+"  "+$scope.appointments+"  "+$scope.demos);
  }
});
