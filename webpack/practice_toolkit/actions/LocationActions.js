var alt = require('../alt');

class LocationAction {
    updateLocations(locations){
        return locations;
    }
}

module.exports = alt.createActions(LocationAction)