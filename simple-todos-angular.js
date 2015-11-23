Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields:"USERNAME_ONLY"
  });

  // This code only runs on the client
  angular.module('simple-todos',['angular-meteor','accounts.ui']);

  function onReady(){
    angular.bootstrap(document,['simple-todos']);
  }

  if( Meteor.isCordova ){
    angular.element(document).on('deviceready',onReady);
  }else{
    angular.element(document).ready(onReady);
  }

  angular.module('simple-todos').controller('TodosListCtrl',['$scope','$meteor',
      function($scope,$meteor){
        $scope.tasks = $meteor.collection(function(){
          return Tasks.find( $scope.getReactively('query'),{sort:{createAt:-1}});
        });

        $scope.addTask = function(newTask){
          $scope.tasks.push({
            text: newTask,
            createAt: new Date(),  // curent time
            owner: Meteor.userId(), // _id of logged in user
            username: Meteor.user().username  // username of logged in user
          });
        }


        $scope.$watch('hideCompleted',function(){
          if($scope.hideCompleted){
            $scope.query = {checked:{$ne:true}};
          }else{
            $scope.query = {};
          }
        })

        $scope.incompleteCount = function() {
          return Tasks.find({checked:{$ne:true}}).count();
        }

      }
  ]);


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
