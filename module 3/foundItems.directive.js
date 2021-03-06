/**
 * Created by jose- on 03/10/2016.
 */
(function() {
    'use strict';
    angular.module('NarrowItDownApp')
        .directive('foundItems', foundItemsFunction);


    function foundItemsFunction()
    {
        return {
            restrict: 'E',
            templateUrl: 'itemsloaderindicator.template.html',
            scope: {
                foundItems : '<',
                onRemove : '=?'
            },
            controller: 'FoundCtrl',
            controllerAs: 'foundCtrl'
        };
    }
})();
