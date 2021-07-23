var isFromBellville = function(registration){
    if (registration.startsWith("CY")){
        return true;
        }
        else {
        return false;
    }
}

// var isFromBellville = function(registration){ registrationPlate = registration.startsWith('CY'); return registrationPlate; }

module.exports = isFromBellville;