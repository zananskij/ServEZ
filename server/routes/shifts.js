// - POST /api/shifts - Create a new shift
// - GET /api/shifts - Get all shifts
// - GET /api/shifts/:id - Get a single shift
// - PUT /api/shifts/:id - Update a shift
// - DELETE /api/shifts/:id - Delete a shift

const router = require("express").Router()
let Shift = require("../models/shift")
// endpoint to get all shifts
router.route("/").get((req, res) => {
  Shift.find()
    .then((shifts) => res.json(shifts))
    .catch((err) => res.status(400).json("Error: " + err))
})
// more endpoints to be added here...
module.exports = router
