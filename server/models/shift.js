// const shiftSchema = new mongoose.Schema({
//   staff: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   startTime: {
//     type: String,
//     required: true,
//   },
//   endTime: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["Confirmed", "Pending", "Cancelled"],
//     default: "Pending",
//   },
// })
// module.exports = mongoose.model("Shift", shiftSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ShiftSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
})
module.exports = mongoose.model("Shift", ShiftSchema)
