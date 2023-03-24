// npm init -y
// npm i express
// npm i --save-dev dotenv nodemon
// npm run devStart
require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Subscriber = require("./models/subscriber")


//connect to mongodb
mongoose.connect('mongodb+srv://chris:sQD3FwjnYc7ldF0f@cluster0.d9kbh3a.mongodb.net/?retryWrites=true&w=majority'
)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to db'))



app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

// users router
// const userRouter = require("./routes/users")
// app.use("/users", userRouter)

//violetCube router
const violetCubeRouter = require("./routes/violetCube")
app.use("/violetCube", violetCubeRouter)

//nasa router
const nasaRouter = require("./routes/nasa")
app.use("/nasa", nasaRouter)

app.listen(8081)
