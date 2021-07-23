let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){

    it('should display where a registration is from', function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('should display where a registration is from', function(){
        assert.equal('Some other place!', fromWhere('CC'));
    });
});