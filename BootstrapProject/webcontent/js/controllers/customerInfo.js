/**
 * Created by kulkamah on 6/16/2015.
 */

(function() {


        var bootstrapApp = angular.module('bootstrapApp');

        var CustomerInfoController = function($scope, $log) {

            $scope.customer1 = {
                name: 'Xiomi Niomi',
                aage: '20'
            };

            $scope.customer2 = {
                name: 'Mahesh Kulkarni',
                aage: '35'
            };

        };

        bootstrapApp.controller('customerInfoController', CustomerInfoController);

})();
