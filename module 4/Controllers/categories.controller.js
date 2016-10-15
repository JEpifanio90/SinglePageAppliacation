/**
 * Created by jose- on 09/10/2016.
 */
(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryController', CategoryController);


    CategoryController.$inject = ['categoryList'];

    function CategoryController(categoryList) {
        var categoryScope = this;
        categoryScope.categoryItems= categoryList;
    }

})();
