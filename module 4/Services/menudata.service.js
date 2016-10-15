/**
 * Created by jose- on 09/10/2016.
 */
(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('CategoryUrl', "https://davids-restaurant.herokuapp.com/categories.json")
        .constant('ItemsBaseUrl', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");


    MenuDataService.$inject = ['$http', 'CategoryUrl', 'ItemsBaseUrl']

    function MenuDataService($http, CategoryUrl, ItemsBaseUrl) {
        var menuDataScope = this;
        menuDataScope.getAllCategories = function() {

            var httpPromise = $http({
                    method: "GET",
                    url: (CategoryUrl)
                })
                .then(function(response) {
                    return response.data;
                })
                .catch(function(err) {
                    console.log("MenuDataService.getAllCategories: catch: err=", err);
                });
            return httpPromise;
        };

        menuDataScope.getItemsForCategory = function(categoryShortName) {
            var httpPromise = $http({
                    method: "GET",
                    url: (ItemsBaseUrl + categoryShortName)
                })
                .then(function(response) {
                    return response.data.menu_items;
                })
                .catch(function(err) {
                    console.log("MenuDataService.getItemsForCategory: catch: err=", err);
                });

            return httpPromise;
        };
    }

})();
