var countAllFromTown = function (registrations, location){
    // console.log(registrations);
    // console.log(location);
    
    var reg = registrations.split(",");
    var regCount = 0;
    
    for(var i=0;i<reg.length;i++){
      if(reg[i].trim().startsWith(location)){
        regCount++;
        // console.log(regCount);
        }
    }
    return regCount;
    //console.log(regCount);
}

module.exports = countAllFromTown