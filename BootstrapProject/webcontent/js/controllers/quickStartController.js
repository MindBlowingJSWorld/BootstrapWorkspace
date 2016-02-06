/**
 * Created by kulkamah on 4/23/2015.
 */
(function() {
    var bootstrapApp = angular.module('bootstrapApp');

    var QuickStartController = function($scope, $log) {
        var init = function() {
            $log.log('Quick Start Controller loaded');
        };

        init();
    };


    bootstrapApp.controller('quickStartController', QuickStartController);



})();
