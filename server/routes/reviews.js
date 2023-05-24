const router = require("express").Router()
let Review = require("../models/review")

// POST route to create a new review
router.route("/").post((req, res) => {
  const user = req.body.user
  const rating = Number(req.body.rating)
  const comment = req.body.comment
  const date = Date.parse(req.body.date)

  const newReview = new Review({
    user,
    rating,
    comment,
    date,
  })

  newReview
    .save()
    .then(() => res.json("Review added!"))
    .catch((err) => res.status(400).json("Error: " + err))
})

// GET route to fetch all reviews
router.route("/").get((req, res) => {
  Review.find()
    .then((reviews) => res.json(reviews))
    .catch((err) => res.status(400).json("Error: " + err))
})

// GET route to fetch a single review by its ID
router.route("/:id").get((req, res) => {
  Review.findById(req.params.id)
    .then((review) => res.json(review))
    .catch((err) => res.status(400).json("Error: " + err))
})

// PUT route to update a review by its ID
router.route("/:id").put((req, res) => {
  Review.findById(req.params.id)
    .then((review) => {
      review.user = req.body.user
      review.rating = Number(req.body.rating)
      review.comment = req.body.comment
      review.date = Date.parse(req.body.date)

      review
        .save()
        .then(() => res.json("Review updated!"))
        .catch((err) => res.status(400).json("Error: " + err))
    })
    .catch((err) => res.status(400).json("Error: " + err))
})

// DELETE route to delete a review by its ID
router.route("/:id").delete((req, res) => {
  Review.findByIdAndDelete(req.params.id)
    .then(() => res.json("Review deleted."))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router
