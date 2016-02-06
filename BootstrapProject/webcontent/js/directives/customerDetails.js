/**
 * Created by kulkamah on 6/16/2015.
 */

(function(){

    /**
     *  The Customer Details Template
     */
    var bootstrapApp = angular.module('bootstrapApp');

    bootstrapApp.directive('customerDetails', function() {
        return {
            templateUrl: function(elem, attr){
                return 'partials/customerDetails/'+ attr.type +'.html'
            }
        };

    });
})();
