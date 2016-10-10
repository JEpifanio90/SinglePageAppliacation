/**
 * Created by jose- on 09/10/2016.
 */
(function(){
    'use strict';

    angular.module('data')
        .component('categories', {
            templateUrl: '../Views/homeView.html',
            bindings: {
                items: '='
            },
            controller: 'CategoriesCtrl'
        });
})();