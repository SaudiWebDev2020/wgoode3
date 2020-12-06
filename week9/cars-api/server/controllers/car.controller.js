console.log("inside of cars.controller.js");

const Cars = require("../models/car.model");


class CarController {

    index(req, res) {
        Cars.find()
            .then(cars => res.render("index", { cars }))
            .catch(err => res.json(err));
    }

    create(req, res) {
        Cars.create(req.body)
            .then(car => res.json({ status: "ok", car }))
            .catch(err => res.json(err));
    }

    otherCreate(req, res) {
        Cars.create(req.body)
            .then(car => res.redirect("/"))
            .catch(err => res.json(err));
    }

    getAll(req, res) {
        Cars.find()
            .then(cars => res.json({ status: "ok", cars }))
            .catch(err => res.json(err));
    }

}

module.exports = new CarController();