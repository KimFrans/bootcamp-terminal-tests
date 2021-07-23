var transportFee = function (shift){
    // console.log(shift);
      
      if(shift === "morning"){
         return "R20";
        }
      if(shift === "afternoon"){
         return "R10";
        }
      if(shift === "nightshift"){
         return "free";
        }
      
}

module.exports = transportFee