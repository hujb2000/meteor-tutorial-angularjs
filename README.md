
1. Createing app

meteor create simple-todos-angular

cd simple-todos-angular

meteor

http://localhost:3000


2. Defining views with templates

	To user Angular in our app, we firtst need to remove the default UI package of Meteor, called Blaze

	We also need to remove Meteor's default ECMAScript2015 package named ecmascript because Angular-Meteor uses a packages

	named angular-babel in order to get both ECMAScript2015 and AngularJS DI annotations

	meteor remove blaze-html-templates

	meteor remove ecmascript

	meteor add angular

	The angular-meteor package parses all of the html files in your app folder and puts them in Angular's template cache with the id of their full path.

	So, for example, when a file is named my-angular-template.html is placed in the client folder. it will be available for ng-include or ui-router with the name client/my-angular-template.html

3. We are using the $meteor service to bind out Tasks colection to our $scope.tasks variable. Now every change that will happen to each of those objects will by synced in real time across our stack.

4. Adding  tasks with a form

	ng-submit

	ng-model

	$scope.addTask

5. chekcing off and deleting tasks

	ng-repeat

	ng-class

	ng-click="tasks.remove(task)"

	ng-model

6.  Deploy your app

	meteor deploy hujb2000.meteor.com

7. Running your app on Android or iOS

	Currently, Meteor on Windows does not support mobile builds, If your are using Meteor on Windows , your should skip this step.

	* Setting up Angular for mobile

	Angular needs the main document to be ready so it can bootstrap, but different devices have different events for ready.  To solve this ,we need to change the way we bootstrap our Angular App

	Remove the current bootstrap by removing ng-app from the <body> tag

	meteor add-platform ios

	meteor run ios --port 3001

	meteor add-platform android

	meteor run android

	meteor run ios-device

	meteor run android-device

8. Filtering collections

	#scope.$watch('hideCompleted',function(){
		$scope.query = {checked: {$ne:true}};
	});

	* Connecting Angular bindings to Meteor's reactivity

	To make Meteor understand Angular bindings and the other way around , we use $scope.getReactively function that turns Angular scope variables into Meteor reactive variables.

9. Adding user accounts

	meteor add accounts-password dotansimha:accounts-ui-angular

	Now let's add dependency to account.ui module in our module definition:

	angular.module('simple-todos',['angular-meteor','accounts.ui']);

	Add loginButtons directive

	<login-buttons></login-buttons>

	add an ng-show directive to only show the form when there is a logged in user, hide new task form if user is not logged in

	ng-show="$root.currentUser"

	Getting informations about the logged-in user

	{{$root.currentUser}}

10. Security with methods

	meteor remove insecure

	Add Meteor Methods for add, delete and check tasks

	Add scope functions to call the Meteor methods

	ng-click="deleteTask(task)"