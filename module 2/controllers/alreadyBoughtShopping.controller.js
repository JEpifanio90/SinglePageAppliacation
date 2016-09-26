(function(){
  'use strict';

  angular.module("ShoppingListCheckOff")
         .controller("AlreadyBoughtShoppingController", alreadyListCtrl);

  alreadyListCtrl.$inject = ["$log","ShoppingListCheckOffService","$scope"];
  function alreadyListCtrl($log, ShoppingListCheckOffService, $scope)
  {
    var boughtListScope = this;
    boughtListScope.alreadyBoughtItems = ShoppingListCheckOffService.getABItems();
    $scope.$watch('alreadyBoughtItems.length');
    boughtListScope.itemsInList = boughtListScope.alreadyBoughtItems.length;

  }
})();
