var fromWhere = function (registration) {
    console.log(registration);

    if (registration.startsWith("CY")) {
        return "Bellville";
    }

    if (registration.startsWith("CJ")) {
        return "Paarl";
    }

    if (registration.startsWith("CA")) {
        return "Cape Town";
    }

    else {
        return "Some other place!";
    }

}

module.exports = fromWhere