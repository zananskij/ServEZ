// - POST /api/reservations - Create a new reservation
// - GET /api/reservations - Get all reservations
// - GET /api/reservations/:id - Get a single reservation
// - PUT /api/reservations/:id - Update a
// reservation
// - DELETE /api/reservations/:id - Delete a reservation

const router = require("express").Router()
let Reservation = require("../models/reservation")
// endpoint to get all reservations
router.route("/").get((req, res) => {
  Reservation.find()
    .then((reservations) => res.json(reservations))
    .catch((err) => res.status(400).json("Error: " + err))
})
// more endpoints to be added here...
module.exports = router
