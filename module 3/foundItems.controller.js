/**
 * Created by jose- on 04/10/2016.
 */
(function(){
    'use strict';
    angular.module('NarrowItDownApp')
        .controller('FoundCtrl', FoundFunction);

    FoundFunction.$inject = ['$log'];
    function FoundFunction($log)
    {
        var FoundScope = this;
        $log.log(FoundScope.foundItems);
        $log.log(FoundScope.onRemove);
    }

})();