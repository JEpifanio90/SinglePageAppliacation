/**
 * Created by jose- on 24/10/2016.
 */
(function () {
    'use strict';

    angular.module('restaurant')
        .controller('myInfoCtrl', myInfoFunction);

    myInfoFunction.$inject = ['singUpService'];

    function myInfoFunction(singUpService)
    {
        var myInfoScope = this;
        myInfoScope.name = singUpService.getFirstName();
        myInfoScope.lastName = singUpService.getLastName();
        myInfoScope.email = singUpService.getEmail();
        myInfoScope.cellphone = singUpService.getCellphone();
        myInfoScope.favoriteDish = singUpService.getFavoriteDish();
        console.log(singUpService);
    }
})();