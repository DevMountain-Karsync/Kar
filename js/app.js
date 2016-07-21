angular.module('karSync', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    templateUrl: './views/login.html',
    url: '/',
    controller: 'loginCtrl'
  })
    .state('dashboard', {
    templateUrl: './views/dashboard.html',
    url: '/dashboard/',
    controller: 'dashCtrl'
    })
    .state('dashboardDisplay', {
    templateUrl: './views/dashboardDisplay.html',
    url: 'display/',
    parent: "dashboard",
    controller: "dashDisplayCtrl"
    })
    .state('addCust', {
      templateUrl: './views/addCustomer.html',
      url: 'add/',
      parent: "dashboard",
      controller: 'addCtrl'
    })
    .state('currentCust', {
      templateUrl: './views/currentCustomer.html',
      url: '/current/',
      controller: 'currentCtrl'
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
