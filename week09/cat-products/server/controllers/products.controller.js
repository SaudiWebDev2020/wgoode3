const { Category, Product } = require("../models/product.model.js");

class ProductController {

    getAll(req, res) {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.json(err));
    }

    create(req, res) {
        Product.create(req.body)
            .then(product => res.json(product))
            .catch(err => res.json(err));
    }

    addCat(req, res) {
        Product.findOneAndUpdate({_id: req.params._id}, {$push: {categories: req.body}}, {new: true, runValidators: true})
            .then(x => res.json(x))
            .catch(err => res.json(err));
    }

    removeCat(req, res) {
        console.log(req.params);
        console.log(req.body);
        Product.findOneAndUpdate({_id: req.params._id}, {$pull: {categories: req.body}}, {new: true})
            .then(x => res.json(x))
            .catch(err => res.json(err));
    }

}

module.exports = new ProductController();