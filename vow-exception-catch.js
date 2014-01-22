var Vow = require('vow');

var v1 = Vow.defer(),
    v2 = Vow.defer();

Vow.all([v1, v2]).then(
    function(args) {
        args[0].map(function(i){ return i });
    },
    function(err) {
        console.error(err.stack);
    }
).fail(function(err) {
    console.error(err.stack);
});

v1.resolve(1);
v2.resolve('two');
