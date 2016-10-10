/**
 * Created by jose- on 09/10/2016.
 */
(function(){
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfigFunction);

    RoutesConfigFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfigFunction($stateProvider, $urlRouterProvider) {

        var categoriesState = {
            name: 'categories',
            url: '/categories',
            templateUrl: '../Views/CategoriesView.html',
            controller: 'CategoriesCtrl as categoryCtrl',
            resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        };

        var itemsState = {
            name: 'items',
            url: '/items',
            templateUrl: '../Views/ItemsView.html'
        };

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: '../Views/homeView.html'
        }

        $stateProvider.state(categoriesState);
        $stateProvider.state(itemsState);
        $stateProvider.state(homeState);
        $urlRouterProvider.otherwise('/');
    }
})();