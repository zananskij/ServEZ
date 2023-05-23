// const mongoose = require("mongoose")
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ["Admin", "Staff", "Customer"],
//     required: true,
//   },
// })
// module.exports = mongoose.model("User", userSchema)

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
})
module.exports = mongoose.model("User", UserSchema)
