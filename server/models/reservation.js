// const reservationSchema = new mongoose.Schema({
//   customer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
//   table: {
//     type: Number,
//     required: true,
//   },
//   specialRequests: String,
// })
// module.exports = mongoose.model("Reservation", reservationSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ReservationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  partySize: { type: Number, required: true },
})
module.exports = mongoose.model("Reservation", ReservationSchema)
