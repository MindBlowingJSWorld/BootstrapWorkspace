/**
 * Created by kulkamah on 6/15/2015.
 */
(function(){
    var bootstrapApp = angular.module('bootstrapApp');
    /**
     *  templateUrl  ->  Specify html url which can be linked here
     */
    bootstrapApp.directive('copyrightDirective', function() {
        return {
            templateUrl : 'partials/copyright/copyright.html'
        };
    });

    /**
     *  template  ->  html code can be added here
     */
    bootstrapApp.directive('noCopyrightDirective', function() {
        return {
            template : '<div class="container"><strong>Copyright is not ready yet, this feature will come later</strong></div>'
        };
    });



})();
