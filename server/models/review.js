// const reviewSchema = new mongoose.Schema({
//   customer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   rating: {
//     type: Number,
//     min: 1,
//     max: 5,
//   },
//   reviewText: String,
// })
// module.exports = mongoose.model("Review", reviewSchema)
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ReviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, required: true },
  comment: { type: String },
  date: { type: Date, required: true },
})
module.exports = mongoose.model("Review", ReviewSchema)
