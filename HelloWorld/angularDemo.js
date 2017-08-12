var app = angular.module("demoApp", ['ui.bootstrap']);
app.controller("demoCtrl", function ($scope){
	$scope.message = "Screw You Bro";
});

app.controller("studentCtrl", function($scope){
	$scope.student = {
		firstName : "sir zin",
		lastName : "",
		fees: "50000",
		subjects:[
			{name:'Physics',marks:70},
			{name:'Chemistry',marks:80},
			{name:'Math',marks:65}
		],
		fullName: function(){
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};
});
