const Restaurants = require("../controllers/restaurant.controller");


// this is the REST pattern
module.exports = app => {
    app.get("/restaurants", Restaurants.getAll);
    app.get("/restaurants/:_id", Restaurants.getOne);
    app.post("/restaurants", Restaurants.create);
    app.put("/restaurants/:_id", Restaurants.update);
    app.delete("/restaurants/:_id", Restaurants.remove);
}