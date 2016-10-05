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
        NarrowItScope.narrowIt = function()
        {
            NarrowItScope.found = MenuSearchService.getMatchedMenuItems(NarrowItScope.userInput);
        };
    }
})();
