const Products = require("../controllers/products.controller.js");

module.exports = app => {

    app.get("/api/products", Products.getAll);
    app.post("/api/products", Products.create);

    app.post("/api/products/:_id/addcat", Products.addCat);
    app.put("/api/products/:_id", Products.removeCat);

}