const Restaurant = require("../models/restaurant.model");
const Review = require("../models/review.model");


class ReviewController {

    create(req, res) {
        Review.create(req.body)
            .then(newReview => {
                Restaurant.findOneAndUpdate({_id: req.params}, {$push: {reviews: newReview}})
                    .then(res.json({msg: "ok"}))
                    .catch(err => res.json(err));
            }).catch(err => res.json(err));
    }

}

module.exports = new ReviewController();