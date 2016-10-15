/**
 * Created by jose- on 09/10/2016.
 */
(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);


    ItemsController.$inject = ['MenuDataService', 'itemList'];

    function ItemsController(MenuDataService, itemList) {
        console.log("ItemsController: entering, itemlist=", itemList);
        var self = this;
        self.itemlist = itemList;
    }

})();
