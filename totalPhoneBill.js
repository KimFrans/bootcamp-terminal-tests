var totalPhoneBill = function (calls) {
    // console.log(calls);

    var callList = calls.split(", ");
    
    var total = 0;

    for (var i = 0; i < callList.length; i++) {
        if (callList[i] === "call") {
            total += 2.75;
        }
        else if (callList[i] === "sms") {
            total += 0.65;
        }
    }
    
    return 'R' + total.toFixed(2);
    
}

module.exports = totalPhoneBill