var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
 
  var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/data");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
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