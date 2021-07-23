var countAllPaarl = function (registrations){
    // console.log(registrations);
    
    var regList = registrations.split(",");
    var regCount =0;
    
    for(var i=0;i<regList.length;i++){
      var currentReg = regList[i].trim();
      
      if(currentReg.startsWith("CJ")){
        regCount++;
        }
    
    }
    return regCount;
}

module.exports = countAllPaarl