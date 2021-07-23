var isWeekday = function (days){
    // console.log(days);
    
    if(days.startsWith("S")){
       return false;
       }
    else {
     return true; 
    }
}

module.exports = isWeekday