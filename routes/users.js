const express = require("express")
const router = express.Router()

router.use(logger)

// **************************************************************************
router.get("/", (req, res) => {
  console.log(req.query.name)
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.render("users/new")
})

router.post("/", (req, res) => {
  const isValid = false
  if (isValid) {
    users.push({ firstName: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log("Error")
    res.render("users/new", { firstName: req.body.firstName })
  }
})

// **************************************************************************
// route keyword, dynamic id
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })
// **************************************************************************
// param key word
// whenever you go to a "id" url, run this function
// param is a middleware, you have to call next() to continue the call. If user type in localhost:3000/user/2 
// this middleware will first be ran, then run the get method at line 31 above
const users = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
  req.user = users[id]
  next()
})
// **************************************************************************
function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
