/**
 * Created by jose- on 09/10/2016.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'ItemsView.html',
            bindings: {
                items: '<'
            }
        });

})();
