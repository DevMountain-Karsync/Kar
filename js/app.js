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
    controller: 'dashCtrl',
    resolve: {
      partner: function(loginServ) {
        return loginServ.getLogin()
      }
     }
    })

    .state('dashboardDisplay', {
    templateUrl: './views/dashboardDisplay.html',
    url: 'display/',
    parent: "dashboard",
    controller: "dashDisplayCtrl",
    resolve: {
      partner: function(loginServ) {
        return loginServ.getLogin()
      }
     }
    })

    .state('addCust', {
      templateUrl: './views/addCustomer.html',
      url: '/add/',
      parent: "newCustomer",
      controller: 'addCtrl',
      resolve: {
        partner: function(loginServ) {
          return loginServ.getLogin()
        }
       }
    })
    .state('newCustomer', {
      templateUrl: './views/newCustomer.html',
      url: '/newCustomer/',
      controller: 'newCustCtrl',
      resolve: {
        partner: function(loginServ) {
          return loginServ.getLogin()
        }
       }
    })
    .state('currentCust', {
      templateUrl: './views/currentCustomer.html',
      url: '/current/',
      controller: 'currentCtrl',
      resolve: {
        partner: function(loginServ) {
          return loginServ.getLogin()
        }
       }
    })

    .state('maintenance', {
      templateUrl: './views/maintenance.html',
      url: '/maintenance/',
      controller: 'maintCtrl',
      resolve: {
        partner: function(loginServ) {
          return loginServ.getLogin()
        }
       }
    })
    .state('diagnostics', {
      templateUrl: './views/diagnostics.html',
      url: '/diagnostics/',
      controller: 'diagCtrl',
      resolve: {
        partner: function(loginServ) {
          return loginServ.getLogin()
        }
       }
    })
    .state('schedule', {
      templateUrl: './views/schedule.html',
      url: '/schedule/',
      controller: 'scheduleCtrl',
      resolve: {
        partner: function(loginServ) {
          return loginServ.getLogin()
        }
       }
    })
  $urlRouterProvider
  .otherwise('/')
});
