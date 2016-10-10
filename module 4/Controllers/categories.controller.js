/**
 * Created by jose- on 09/10/2016.
 */
(function(){
    'use strict';

    angular.module('data')
        .controller('CategoriesCtrl', CategoriesFunction);

    CategoriesFunction.$inject = ['items', '$log'];
    function CategoriesFunction(items, $log){
        var categoriesScope = this;
        categoriesScope.message="This is my message";
        $log.log(items);
        /*categoriesScope.categories = [];
        var categoriesPromise = categories.getAllCategories();
        $log.log(categoriesPromise);
         promise.then(function successCallback(response) {
         for(var index=0; index<response.data.length; index++)
         {
         $log.log("HASDKAJSKDJKSAd");
         MenuDataScope.categories.push(response.data[index]);
         }
         }).catch(function errorCallback(response) {
         $log.log("Error response: ", response);
         });*/
    }

})();