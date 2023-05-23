// - POST /api/reviews - Create a new review
//     - GET /api/reviews - Get all reviews
//     - GET /api/reviews/:id - Get a single review
//     - PUT /api/reviews/:id - Update a review
//     - DELETE /api/reviews/:id - Delete a review

const router = require("express").Router()
let Review = require("../models/review")
// endpoint to get all reviews
router.route("/").get((req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err))
})
// more endpoints to be added here...
module.exports = router
