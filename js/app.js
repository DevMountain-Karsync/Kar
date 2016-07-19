angular.module('karSync', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('index', {
      url: '/'
    })
    .state('dashboard', {
    templateUrl: './views/dashboard.html',
    url: '/dashboard/',
    controller: 'dashCtrl'
    })
    .state('addCust', {
      templateUrl: './views/addCustomer.html',
      url: '/add/',
      controller: 'addCtrl'
    })
    .state('currentCust', {
      templateUrl: './views/currentCustomer.html',
      url: '/current/',
      controller: 'currentCtrl'
    })
    .state('login', {
      templateUrl: './views/login.html',
      url: '/login/',
      controller: 'loginCtrl'
    })
    .state('maintenance', {
      templateUrl: './views/maintenance.html',
      url: '/maintenance/',
      controller: 'maintCtrl'
    })
    .state('diagnostics', {
      templateUrl: './views/diagnostics.html',
      url: '/diagnostics/',
      controller: 'diagCtrl'
    })
    .state('schedule', {
      templateUrl: './views/schedule.html',
      url: '/schedule/',
      controller: 'scheduleCtrl'
    })
  $urlRouterProvider
  .otherwise('/')
});
