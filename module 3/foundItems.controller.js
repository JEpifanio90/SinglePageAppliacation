/**
 * Created by jose- on 04/10/2016.
 */
(function(){
    'use strict';
    angular.module('NarrowItDownApp')
        .controller('FoundCtrl', FoundFunction);

    FoundFunction.$inject = ['MenuSearchService'];
    function FoundFunction(MenuSearchService)
    {
        var FoundScope = this;
        FoundScope.removeItem = function(id)
        {
            MenuSearchService.deleteFromArray(id);
        }
    }
})();