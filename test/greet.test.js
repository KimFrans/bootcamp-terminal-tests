let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Kim correctly', function(){
        assert.equal('Hello, Kim', greet('Kim'));
    });
    it('should greet Kelly correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Kelly', greet('Kelly'));
    });
});