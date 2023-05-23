// - POST /api/orders - Create a new order
//     - GET /api/orders - Get all orders
//     - GET /api/orders/:id - Get a single order
//     - PUT /api/orders/:id - Update an order
//     - DELETE /api/orders/:id - Delete an order

const router = require("express").Router()
let Order = require("../models/order")
// endpoint to get all orders
router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err))
})
// more endpoints to be added here...
module.exports = router
