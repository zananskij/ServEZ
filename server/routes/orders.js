const router = require("express").Router()
let Order = require("../models/order")
// Create a new order
router.route("/").post((req, res) => {
  const newOrder = new Order({
    user: req.body.user,
    items: req.body.items,
    total: req.body.total,
  })
  newOrder
    .save()
    .then(() => res.json("Order created!"))
    .catch((err) => res.status(400).json("Error: " + err))
})
// Get all orders
router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err))
})
// Get a single order
router.route("/:id").get((req, res) => {
  Order.findById(req.params.id)
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error: " + err))
})
// Update an order
router.route("/:id").put((req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      order.user = req.body.user
      order.items = req.body.items
      order.total = req.body.total
      order
        .save()
        .then(() => res.json("Order updated!"))
        .catch((err) => res.status(400).json("Error: " + err))
    })
    .catch((err) => res.status(400).json("Error: " + err))
})
// Delete an order
router.route("/:id").delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.json("Order deleted."))
    .catch((err) => res.status(400).json("Error: " + err))
})
module.exports = router
