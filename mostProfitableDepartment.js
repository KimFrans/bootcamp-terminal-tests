var mostProfitableDepartment = function (profitableDept) {
    //departments then initialize them to be zero
    //console.log(profitableDept);
    var departmentObj = { hardware: 0, outdoor: 0, carpentry: 0, electronics: 0 };
    //var deptMap = {}
    for (var index in profitableDept) {
        if (profitableDept[index].department === "hardware") {
            departmentObj.hardware += profitableDept[index].sales;
        }
        else if (profitableDept[index].department === "outdoor") {
            departmentObj.outdoor += profitableDept[index].sales;
        }
        else if (profitableDept[index].department === "carpentry") {
            departmentObj.carpentry += profitableDept[index].sales;
        }
        else if (profitableDept[index].department === "electronics") {
            departmentObj.electronics += profitableDept[index].sales;
        }
    }
    var arrObj = [];
    for (var i in departmentObj) {
        arrObj.push([i, departmentObj[i]])
    }
    arrObj.sort(function (a, b) {
        return b[1] - a[1]
    });
    console.log(arrObj[0]);
    return arrObj[0][0]
}

module.exports = mostProfitableDepartment