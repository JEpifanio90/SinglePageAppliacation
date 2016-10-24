/**
 * Created by jose- on 23/10/2016.
 */
(function() {
    'use strict';

    angular.module('restaurant')
        .service('singUpService', signUpFunction);


    function signUpFunction()
    {
        var signUpScope = this;
        signUpScope.name = '';
        signUpScope.lastName = '';
        signUpScope.email = '';
        signUpScope.cellphone = 0;
        signUpScope.favoriteDish = '';

        signUpScope.setFirstName = function (userName) {
            signUpScope.name = userName;
        };

        signUpScope.setLastName = function (userLastName) {
            signUpScope.lastName = userLastName;
        };

        signUpScope.setEmail = function (userEmail) {
            signUpScope.email = userEmail;
        };

        signUpScope.setCellphone = function (userCellphone) {
            signUpScope.cellphone = userCellphone;
        };

        signUpScope.setFavoriteDish = function (userFavDish) {
            signUpScope.favoriteDish = userFavDish;
        };
    }

})();