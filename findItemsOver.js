var findItemsOver = function (itemList, threshold) {
    //console.log(threshold);
    var over = [];
    for (var i in itemList) {
        if (itemList[i].qty > threshold) {
            over.push(itemList[i])
        }
    }
    return over;
}

module.exports = findItemsOver