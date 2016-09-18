/**
 * Created by jose- on 17-Sep-16.
 */
(function()
{
    'use strict';

    angular.module('LunchCheck',[])
        .controller('LunchCheckController', LunchCtrlFunction);

    LunchCtrlFunction.$inject = ["$scope"];
    
    function LunchCtrlFunction($scope) {
        $scope.showTooMuch = false;
        $scope.showEnjoy = false;
        $scope.showErrorMessage = false;
        
        $scope.countItems = function (usrInput)
        {
            if(usrInput)
            {
                var hasEmptyValues = false;
                var words = usrInput.split(',');
                for(var i=0; i<words.length; i++)
                {
                    if(words[i]=="" || words[i]==" ") { hasEmptyValues = true; }
                }
                if (hasEmptyValues)
                {
                    $scope.showTooMuch = false;
                    $scope.showEnjoy = false;
                    $scope.showErrorMessage = true;
                }
                else
                {
                    if(words.length <= 3)
                    {
                        $scope.showErrorMessage = false;
                        $scope.showTooMuch = false;
                        $scope.showEnjoy = true;
                    }
                    else
                    {
                        $scope.showErrorMessage = false;
                        $scope.showTooMuch = true;
                        $scope.showEnjoy = false;
                    }
                }
            }
            else
            {
                $scope.showTooMuch = false;
                $scope.showEnjoy = false;
                $scope.showErrorMessage = true;
            }
        }
    }
})();