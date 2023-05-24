// - POST /api/users/register - Register a new user
// - POST /api/users/login - Log in a user
const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
let User = require("../models/user")
// Register a new user
router.route("/register").post((req, res) => {
  // Hash password
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  const newUser = new User({
    username: req.body.username,
    password: hashedPassword,
    role: req.body.role,
    // Add any other fields you have in your User model
  })
  newUser
    .save()
    .then(() => res.json("User registered!"))
    .catch((err) => res.status(400).json("Error: " + err))
})
// Log in a user
router.route("/login").post((req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) return res.status(400).json("Error: User not found")
      // Check password
      const validPassword = bcrypt.compareSync(req.body.password, user.password)
      if (!validPassword) return res.status(400).json("Error: Invalid password")
      // Generate token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
      res.json({ token })
    })
    .catch((err) => res.status(400).json("Error: " + err))
})
module.exports = router
