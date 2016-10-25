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
            singUpService.setFirstName(signScope.name);
            singUpService.setLastName(signScope.lastName);
            singUpService.setEmail(signScope.cellphone);
            singUpService.setCellphone(signScope.email);
            singUpService.setFavoriteDish(signScope.favDish);
        }
    }
})();