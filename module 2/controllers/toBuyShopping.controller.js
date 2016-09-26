(function(){
  'use strict';

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", toBuyListCtrl)

  //Injections
  toBuyListCtrl.$inject = ["$log", "ShoppingListCheckOffService"];
  //////////////////////

  // Controller
  function toBuyListCtrl($log, ShoppingListCheckOffService)
  {
    var buyListScope = this;
    buyListScope.toBuyItems = ShoppingListCheckOffService.getTBItems();
    buyListScope.toBuyItemsLeft = buyListScope.toBuyItems.length;
    buyListScope.showMessage = false;

    buyListScope.addItem = function(itemIndex)
    {
       if (!ShoppingListCheckOffService.existItemInABItems(itemIndex))
       {
         ShoppingListCheckOffService.addItemToABItems(itemIndex);
         ShoppingListCheckOffService.removeItemFromTBItems(itemIndex);
         buyListScope.showMessage = ShoppingListCheckOffService.showToBuyMessage();
       }
    };

  }
  //////////////////////

})();
