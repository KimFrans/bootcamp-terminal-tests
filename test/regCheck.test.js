let assert = require("assert");
let regCheck = require("../regCheck");
// let isFromBellville = require("../regCheck");

describe('The regCheck function', function(){

    it('should check if the registration is from a location', function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it('should check if the registration is from a location or not', function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
});