angular.module('karSync', ['ui.router','ngScrollbars', 'angularModalService', 'ngAnimate'])

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
    controller: "dashDisplayCtrl"
    })
  .state('addAppoint', {
    templateUrl:'./views/scheduleAppoint.html',
    url: 'appointSched/',
    parent: 'dashboard',
    controller: 'dashCtrl',
    resolve: {
      partner: function(loginServ) {
        return loginServ.getLogin()
      }
     }
  })
    .state('newCustomer', {
      templateUrl: './views/newCustomer.html',
      url: '/newCustomer/',
      controller: 'dashCtrl',
      resolve: {
        partner: function(loginServ) {
          return loginServ.getLogin()
        }
       }
  })
  .state('addCust', {
    templateUrl: './views/addCustomer.html',
    url: 'add/',
    controller: "addCtrl",
    parent: "newCustomer",
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
})
// .config(function (ScrollBarsProvider) {
//     // the following settings are defined for all scrollbars unless the
//     // scrollbar has local scope configuration
//     ScrollBarsProvider.defaults = {
//         scrollButtons: {
//             scrollAmount: 'auto', // scroll amount when button pressed
//             enable: true // enable scrolling buttons by default
//         },
//         scrollInertia: 400, // adjust however you want
//         axis: 'yx', // enable 2 axis scrollbars by default,
//         theme: 'dark',
//         autoHideScrollbar: true
//     };
// });
