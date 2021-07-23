let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function(){

    it('should display amount for the transport fee', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should display amount for the transport fee', function(){
        assert.equal('free', transportFee('nightshift'));
    });
});