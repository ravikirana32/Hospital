var newapp=angular.module('newApp', ['ngRoute']);

newapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      }).
      when('/main', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      }).
      when('/doctor', {
        templateUrl: 'views/doctor.html',
        controller: 'doctorController'
      }).
      when('/appointment', {
        templateUrl: 'views/appointment.html',
        controller: 'appointmentController'
      }).
      when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'settingsController'
      }).
      when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'demoController'
      }).
      when('/demo1', {
        templateUrl: 'views/demo1.html',
        controller: 'demo1Controller'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

//main
//doctor
//appointment
//settings guide
//demo1 us