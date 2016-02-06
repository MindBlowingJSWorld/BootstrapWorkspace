/**
 * Created by kulkamah on 4/29/2015.
 */

var url = require('url');
var parts = url.parse(window.location);
var hasher = require('./hasher');

var hash = hasher(window.location);
console.log(parts);
console.log('Hasher : ' + hash);


require('hash-change').on('change', function(hash) {
    console.log('Goto page: ' + hash);
});


