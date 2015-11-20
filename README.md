
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

