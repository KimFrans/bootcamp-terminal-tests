var findItemsOver20 = function (itemList) {
    //console.log(itemList);
    var over20 = [];
    for (var i in itemList) {
        if (itemList[i].qty > 20) {
            over20.push(itemList[i])
        }
    }
    // console.log(over20);
    return over20;
}

module.exports = findItemsOver20