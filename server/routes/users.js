// - POST /api/users/register - Register a new user
// - POST /api/users/login - Log in a user

const router = require("express").Router()
let User = require("../models/user")
// endpoint to get all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err))
})
// more endpoints to be added here...
module.exports = router
