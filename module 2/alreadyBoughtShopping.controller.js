(function(){
  'use strict';

  angular.module("ShoppingListCheckOff")
         .controller("AlreadyBoughtShoppingController", alreadyListCtrl);

  alreadyListCtrl.$inject = ["$log","ShoppingListCheckOffService"];
  function alreadyListCtrl($log, ShoppingListCheckOffService)
  {
    var boughtListScope = this;
    boughtListScope.alreadyBoughtItems = ShoppingListCheckOffService.getABItems();
    boughtListScope.itemsInList = boughtListScope.alreadyBoughtItems.length;

    boughtListScope.removeItem = function(itemIndex)
    {
      ShoppingListCheckOffService.removeItemFromABList(itemIndex);
    }
  }
})();
