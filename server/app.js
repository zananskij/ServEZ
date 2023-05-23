require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.json())

const uri = process.env.MONGODB_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
})

const usersRouter = require("./routes/users")
const reservationsRouter = require("./routes/reservations")
const ordersRouter = require("./routes/orders")
const shiftsRouter = require("./routes/shifts")
const reviewsRouter = require("./routes/reviews")

app.use("/users", usersRouter)
app.use("/reservations", reservationsRouter)
app.use("/orders", ordersRouter)
app.use("/shifts", shiftsRouter)
app.use("/reviews", reviewsRouter)

app.get("/", (req, res) => {
  res.send("Hello from ServEZ API")
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
