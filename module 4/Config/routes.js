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
            templateUrl: 'CategoriesView.html',
            controller: 'CategoryController as ctrl',
            resolve: {
                categoryList: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        };

        var itemsState = {
            name: 'items',
            url: '/items/{categoryid}',
            templateUrl: 'ItemsView.html',
            controller: "ItemsController as itemDetail",
            resolve: {
                itemList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryid);
                }]
            }
        };

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'homeView.html'
        }

        $stateProvider.state(categoriesState);
        $stateProvider.state(itemsState);
        $stateProvider.state(homeState);
        $urlRouterProvider.otherwise('/');
    }
})();