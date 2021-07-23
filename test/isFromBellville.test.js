let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should display true if the registration is from bellville', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should display false if the registration is not from bellville', function(){
        assert.equal(false, isFromBellville('CF 123'));
    });
});