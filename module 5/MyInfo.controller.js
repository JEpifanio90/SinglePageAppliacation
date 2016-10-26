/**
 * Created by jose- on 24/10/2016.
 */
(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['userInfo'];
    function MyInfoController(userInfo) {
        var $myInfoCtrl = this;
        $myInfoCtrl.user = userInfo;
    }

})();
