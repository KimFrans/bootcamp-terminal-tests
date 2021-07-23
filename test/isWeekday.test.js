let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function(){

    it('should count and return the amount of weekdays', function(){
        assert.equal(true, isWeekday('Monday'));
    });
    it('should count and return the amount of weekdays', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
});