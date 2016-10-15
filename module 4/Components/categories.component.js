/**
 * Created by jose- on 09/10/2016.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'homeView.html',
            bindings: {
                items: '<'
            }
        });

})();
