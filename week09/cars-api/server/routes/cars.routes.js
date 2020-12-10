console.log("inside of cars.route.js");


const Cars = require("../controllers/car.controller");

module.exports = app => {
    app.get("/", Cars.index);
    app.post("/create", Cars.otherCreate);
    app.get("/cars", Cars.getAll);
    app.post("/cars", Cars.create);
}