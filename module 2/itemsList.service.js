(function()
{
  'use strict';

  angular.module("ShoppingListCheckOff")
         .service("ShoppingListCheckOffService", ShoppingListService);

  ShoppingListService.$inject = ["$log"];
  function ShoppingListService($log)
  {
    var serviceScope = this;
    serviceScope.toBuyItems = fillItems();
    serviceScope.alreadyBoughtItems = [];

    //add
    serviceScope.addItemToABItems = function(itemIndex)
    {
      serviceScope.alreadyBoughtItems.push(serviceScope.toBuyItems[itemIndex]);
      serviceScope.toBuyItems.splice(itemIndex,1);
    };
    ////////////

    //remove
    serviceScope.removeItemFromABList = function(itemIndex)
    {
      serviceScope.toBuyItems.push(serviceScope.alreadyBoughtItems[itemIndex]);
      serviceScope.alreadyBoughtItems.splice(itemIndex,1);
    };
    ////////////

    //alreadyAdded?
    serviceScope.existItemInABItems = function(itemIndex)
    {
      if (0 < serviceScope.alreadyBoughtItems.length)
      {
        for(var i=0; i<serviceScope.alreadyBoughtItems.length; i++)
        {
          if (serviceScope.alreadyBoughtItems[i].itemName === serviceScope.toBuyItems[itemIndex].itemName)
          {
            return true;
          }
        }
      }
      return false;
    };

    serviceScope.showToBuyMessage = function()
    {
      if (0 >= serviceScope.toBuyItems.length)
      {
        return true;
      }
      else
      {
        return false;
      }
    }

    ////////////

    //Set's and Get's
    serviceScope.getTBItems = function()
    {
      return serviceScope.toBuyItems;
    };

    serviceScope.getABItems = function()
    {
      return serviceScope.alreadyBoughtItems;
    };
    ////////////
  }

  function fillItems()
  {
    var items = [
      {"id":0, "itemName": "apple", "quantity": 1 },
      {"id":1, "itemName": "pineapple", "quantity": 1 },
      {"id":2, "itemName": "tomato", "quantity": 1 },
      {"id":3, "itemName": "lettuce", "quantity": 1 },
      {"id":4, "itemName": "cookies", "quantity": 1 },
    ];
    return items;
  }
  //////////////////////
})();
