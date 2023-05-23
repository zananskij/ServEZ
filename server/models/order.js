// const orderSchema = new mongoose.Schema({
//   customer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   reservation: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Reservation",
//   },
//   items: [
//     {
//       itemName: String,
//       quantity: Number,
//       price: Number,
//     },
//   ],
//   total: Number,
//   status: {
//     type: String,
//     enum: ["Pending", "Completed", "Cancelled"],
//     default: "Pending",
//   },
// })
// module.exports = mongoose.model("Order", orderSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
})
module.exports = mongoose.model("Order", OrderSchema)
