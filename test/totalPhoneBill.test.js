let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){

    it('should display total of the phone bill', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should display total of the phone bill', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
});