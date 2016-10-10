/**
 * Created by jose- on 09/10/2016.
 */
(function(){
    'use strict';
    
    angular.module('data')
        .service('MenuDataService ', MenuDataFunction);

    MenuDataFunction.$inject = ['$http'];
    function MenuDataFunction($http) {
        var MenuDataScope = this;
        MenuDataScope.getAllCategories = function () {
            var promise = $http({ method: 'GET', url:'https://davids-restaurant.herokuapp.com/categories.json' });

            return promise;
        };
        
        MenuDataScope.getItemsForCategory = function (categoryShortName) {
            var urlWithParam ='https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName;
            var promise = $http({
                method: 'GET',
                url: urlWithParam
            });
            return promise;
        };
    }
})();