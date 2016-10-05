/**
 * Created by jose- on 03/10/2016.
 */
(function(){
    'use strict';

    angular.module('NarrowItDownApp')
        .service('MenuSearchService', MenuSearchFunction);

    MenuSearchFunction.$inject = ["$http", "$log"];
    function MenuSearchFunction($http, $log)
    {
        var menuSearchScope = this;
        menuSearchScope.responseArray = [];
        menuSearchScope.getMatchedMenuItems = function(searchTerm)
        {
            // Simple GET request example:
            $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function successCallback(response) {
                var listLength = response.data.menu_items.length;
                for(var i=0; i<listLength; i++)
                {
                    var menuItem = response.data.menu_items[i];
                    if (menuItem.name.includes(searchTerm) || menuItem.description.includes(searchTerm))
                    {
                        menuSearchScope.responseArray.push(menuItem);
                    }
                }
            }, function errorCallback(response) {
                $log.log(response);
            });
            if (menuSearchScope.responseArray.length > 0 )
            {
                return menuSearchScope.responseArray;
            }
        };
    }


})();