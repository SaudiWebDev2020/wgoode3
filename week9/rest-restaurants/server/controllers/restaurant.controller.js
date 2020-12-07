const Restaurant = require("../models/restaurant.model");

class RESTaurantController {

    getAll(req, res) {
        // how we structure our res.json will be how it looks in the front-end
        Restaurant.find({})
            .then(restaurants => res.json(restaurants))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        // TODO
    }

    create(req, res) {
        // when creating the err object can contain validation errors!
        Restaurant.create(req.body)
            .then(restaurant => res.json(restaurant))
            .catch(err => res.json(err));
    }

    update(req, res) {
        // TODO
    }

    remove(req, res) {
        // TODO
    }

}

module.exports = new RESTaurantController();