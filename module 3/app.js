/**
 * Created by jose- on 03/10/2016.
 */
(function(){
    'use strict';

    angular.module('NarrowItDownApp',[])
        .controller('NarrowItDownController', NarrowItFunction);

    NarrowItFunction.$inject = ["MenuSearchService", "$log"];
    function NarrowItFunction(MenuSearchService, $log)
    {
        var NarrowItScope = this;
        NarrowItScope.found = [];
        NarrowItScope.narrowIt = function()
        {
            if(NarrowItScope.userInput)
            {
                NarrowItScope.found = MenuSearchService.getMatchedMenuItems(NarrowItScope.userInput);
            }
            else
            {
                NarrowItScope.found = [];
            }
        };
    }
})();
