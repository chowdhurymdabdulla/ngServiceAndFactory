var UserController = function UserController(UserServise) {
    var self = this;

    // var API = 'http://jsonplaceholder.typicode.com/users/';
    self.userId = '';
    self.chosenUser = [];

    self.getUser = function getUser() {
        if(!self.userId) {
            return;
        }
        UserServise

            .getUser(this.userId)
            .then(function(response) {
                self.chosenUser = response;
                console.log(self.chosenUser);
            })
    };
};


angular
    .module('app')
    .controller('UserController', UserController);
