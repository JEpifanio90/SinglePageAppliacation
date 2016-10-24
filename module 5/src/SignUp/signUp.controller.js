/**
 * Created by jose- on 23/10/2016.
 */
(function() {
    'use strict';

    angular.module('restaurant')
        .controller('SignUpCtrl', SignController);

    SignController.$inject = ['singUpService'];
    function SignController(singUpService)
    {
        var signScope = this;
        signScope.name = '';
        signScope.lastName = '';
        signScope.cellphone = '';
        signScope.email = '';
        signScope.favDish = '';

        signScope.saveUsrData = function () {
            singUpService.setName(signScope.name);
            singUpService.setName(signScope.lastName);
            singUpService.setName(signScope.cellphone);
            singUpService.setName(signScope.email);
            singUpService.setName(signScope.favDish);
        }
    }
})();