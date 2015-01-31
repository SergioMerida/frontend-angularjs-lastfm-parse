Parse.initialize("o738tDIjX7Oq1jSB1PtSG6LfVeZqOgpaKH0pK3dt", "p7JfKdqPlYwWoenFcH1pnxR73YDzNaHAjz6iAwhq");

var AuthApp = angular.module('AuthApp', [])

  .run(['$rootScope', function($scope) {
    $scope.scenario = 'Sign up';
    $scope.currentUser = Parse.User.current();
    
    $scope.signUp = function(form) {
      var user = new Parse.User();
      user.set("email", form.email);
      user.set("username", form.username);
      user.set("password", form.password);
      
      user.signUp(null, {
        success: function(user) {
          $scope.currentUser = user;
          $scope.$apply();
        },
        error: function(user, error) {
          alert("Unable to sign up:  " + error.code + " " + error.message);
        }
      });    
    };
    
    $scope.logIn = function(form) {
      Parse.User.logIn(form.username, form.password, {
        success: function(user) {
          $scope.currentUser = user;
          $scope.$apply();
        },
        error: function(user, error) {
          alert("Unable to log in: " + error.code + " " + error.message);
        }
      });
    };
    
    $scope.logOut = function(form) {
      Parse.User.logOut();
      $scope.currentUser = null;
    };
  }]);

