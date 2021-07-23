let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it('should display amount of years ago', function(){
        assert.equal(45, yearsAgo(1976));
    });
    it('should display amount of years ago', function(){
        assert.equal(21, yearsAgo(2000));
    });
});