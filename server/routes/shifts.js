const router = require("express").Router()
let Shift = require("../models/shift.model")

// POST route to create a new shift
router.route("/").post((req, res) => {
  const user = req.body.user
  const date = Date.parse(req.body.date)
  const startTime = req.body.startTime
  const endTime = req.body.endTime

  const newShift = new Shift({
    user,
    date,
    startTime,
    endTime,
  })

  newShift
    .save()
    .then(() => res.json("Shift added!"))
    .catch((err) => res.status(400).json("Error: " + err))
})

// GET route to fetch all shifts
router.route("/").get((req, res) => {
  Shift.find()
    .then((shifts) => res.json(shifts))
    .catch((err) => res.status(400).json("Error: " + err))
})

// GET route to fetch a single shift by its ID
router.route("/:id").get((req, res) => {
  Shift.findById(req.params.id)
    .then((shift) => res.json(shift))
    .catch((err) => res.status(400).json("Error: " + err))
})

// PUT route to update a shift by its ID
router.route("/:id").put((req, res) => {
  Shift.findById(req.params.id)
    .then((shift) => {
      shift.user = req.body.user
      shift.date = Date.parse(req.body.date)
      shift.startTime = req.body.startTime
      shift.endTime = req.body.endTime

      shift
        .save()
        .then(() => res.json("Shift updated!"))
        .catch((err) => res.status(400).json("Error: " + err))
    })
    .catch((err) => res.status(400).json("Error: " + err))
})

// DELETE route to delete a shift by its ID
router.route("/:id").delete((req, res) => {
  Shift.findByIdAndDelete(req.params.id)
    .then(() => res.json("Shift deleted."))
    .catch((err) => res.status(400).json("Error: " + err))
})

module.exports = router
