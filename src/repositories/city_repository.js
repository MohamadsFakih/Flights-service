const CrudRepository = require('./crud_repository.js');
const {City} = require("../models")

class CityRepository extends CrudRepository{
    constructor() {
        super(City);
    }
}

module.exports = CityRepository;