const router = require("express").Router()
let Reservation = require("../models/reservation")
// Create a new reservation
router.route("/").post((req, res) => {
  const newReservation = new Reservation({
    user: req.body.user,
    date: req.body.date,
    time: req.body.time,
    partySize: req.body.partySize,
  })
  newReservation
    .save()
    .then(() => res.json("Reservation created!"))
    .catch((err) => res.status(400).json("Error: " + err))
})
// Get all reservations
router.route("/").get((req, res) => {
  Reservation.find()
    .then((reservations) => res.json(reservations))
    .catch((err) => res.status(400).json("Error: " + err))
})
// Get a single reservation
router.route("/:id").get((req, res) => {
  Reservation.findById(req.params.id)
    .then((reservation) => res.json(reservation))
    .catch((err) => res.status(400).json("Error: " + err))
})
// Update a reservation
router.route("/:id").put((req, res) => {
  Reservation.findById(req.params.id)
    .then((reservation) => {
      reservation.user = req.body.user
      reservation.date = req.body.date
      reservation.time = req.body.time
      reservation.partySize = req.body.partySize
      reservation
        .save()
        .then(() => res.json("Reservation updated!"))
        .catch((err) => res.status(400).json("Error: " + err))
    })
    .catch((err) => res.status(400).json("Error: " + err))
})
// Delete a reservation
router.route("/:id").delete((req, res) => {
  Reservation.findByIdAndDelete(req.params.id)
    .then(() => res.json("Reservation deleted."))
    .catch((err) => res.status(400).json("Error: " + err))
})
module.exports = router
