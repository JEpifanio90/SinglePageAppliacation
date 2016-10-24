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
        myInfoScope.flag = false;
        if(singUpService.email)
        {
            console.log("vacio?");
        }
    }
})();