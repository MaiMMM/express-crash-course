// npm init -y
// npm i express
// npm i --save-dev nodemon
// npm run devStart
const express = require("express")
const app = express()

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
