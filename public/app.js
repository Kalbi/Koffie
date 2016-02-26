var app = angular.module('koffieApp', ['firebase', 'ui.router']);
 

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    //https://scotch.io/tutorials/angular-routing-using-ui-router
    $stateProvider 
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
        .state('login', {
            url:'/login',
            templateUrl:'partials/login.html'
        })
        .state('profile', {
            url: '/profile',
            templateUrl:'partials/profile.html'        
        })
        .state('following', {
            url:'/following',
            templateUrl:'partials/following.html'
        })
        .state('help', {
            url:'/help',
            templateUrl:'partials/help.html'
        });
});


app.controller('mainCtrl', function($scope, $firebaseObject, $firebaseAuth) {
 
   
  var ref = new Firebase('https://boiling-heat-1276.firebaseio.com');
  // download the data into a local object
  //var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  //syncObject.$bindTo($scope, "data");
 
  function authHandler(error, authData) {
      if (error) {
          console.log("Login Failed!", error);
      } else {
          console.log("Authenticated successfully with payload:", authData);
      }
  }
   
  $scope.submitForm = function(isValid) {

    // check to make sure the form is completely valid
       if (isValid) {
           alert('our form is amazing');
           var auth = $firebaseAuth(ref);
           
           // login with Facebook
            ref.authWithPassword({
              email    : 'bobtony@firebase.com',
              password : 'correcthorsebatterystaple'
            }, authHandler);
       }

   };
});


$( document ).ready(function() {
    
    //When menu button is clicked show navigation
    $(".menu-button-js").click(function() {
    	 
    	 	var $nav = $("nav");
    	  	
    	  	//If nav is hidden, show else hide 
    	    $nav.animate({
      			right: parseInt($nav.css('right'),10) == 0 ?
       			 -$nav.outerWidth() : 0
    	});
	});
});