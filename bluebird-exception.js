var Promise = require('bluebird');

var p1 = Promise.defer();
var p2 = Promise.defer();

Promise.all([p1, p2]).then(
    function(args) {
        args[0].map(function(i){ return i });
    },
    function(err) {
        console.error(err.stack);
    }
).catch(function(err) {
    console.error(err.stack);
});

p1.resolve(1);
p2.resolve('two');
