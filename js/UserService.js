var UserServise = function UserServise($http) {
    var self = this;

    var API = "http://jsonplaceholder.typicode.com/users/";
    // var API = http://jsonplaceholder.typicode.com/users/;
console.log(API);
    var _getUser = function _getUser(userId) {

       return $http
            .get(API + userId)
            .then(function(response) {
                // console.log(response.data);
             return (response.data);

            }, function(reason) {
                //error
            });
    };

    var _getAllUser = function _getAllUser(){

    };
    return {
        getUser: _getUser,
        getAllUser : _getAllUser
    }
};

console.log(UserServise());
angular
    .module('app')
    .factory('UserServise', UserServise);

