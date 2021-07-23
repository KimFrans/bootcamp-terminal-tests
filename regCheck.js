var regCheck = function (reg, location){
    // console.log(reg);
    // console.log(location);
    
    if(reg.endsWith(location)){
       return true;
       }
    else {
     return false; 
    }
}

module.exports = regCheck