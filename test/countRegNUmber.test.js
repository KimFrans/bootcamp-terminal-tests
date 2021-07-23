let assert = require("assert");
let countRegNumber = require("../countRegNumber");
// let isFromBellville = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('should count and return the amount of registration numbers', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should count and return the amount of registration numbers', function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
});