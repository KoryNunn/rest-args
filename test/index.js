var test = require('grape'),
    restArgs = require('../');

function rester(a,b,c){
    return restArgs(arguments);
};

test('', function(t){
    t.plan(2);

    t.deepEqual(rester(1,2,3,4,5), [4,5]);
    t.deepEqual(rester(1,2), []);
});