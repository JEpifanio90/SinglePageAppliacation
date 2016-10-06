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
            var response = $http({ method: 'GET', url: 'https://davids-restaurant.herokuapp.com/menu_items.json'});
            menuSearchScope.responseArray = makeCallToApi(response,searchTerm);
            return menuSearchScope.responseArray;
        };

        menuSearchScope.deleteFromArray = function(id)
        {
            menuSearchScope.responseArray.splice(id, 1);
        };

        menuSearchScope.clearArray = function()
        {
            menuSearchScope.responseArray = [];
        };
    }


    function makeCallToApi(promise, searchTerm)
    {
        var arrayToReturn = [];
        promise.then(function successCallback(response) {
            var listLength = response.data.menu_items.length;
            for(var i=0; i<listLength; i++)
            {
                var menuItem = response.data.menu_items[i];
                if (menuItem.name.includes(searchTerm) || menuItem.description.includes(searchTerm))
                {
                    arrayToReturn.push(menuItem);
                }
            }
        }).catch(function errorCallback(response) { $log.log(response); });
        return arrayToReturn;
    }

})();