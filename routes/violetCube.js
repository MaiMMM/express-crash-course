const express = require("express")
const router = express.Router()

// router.use(logger)
// http://localhost:3001/violetCube/id?type=glove&stat=CRIT&num=36&numOfTry=10000
// **************************************************************************
router.get("/", (req, res) => {
//   console.log(req.query.name)
  res.send("Welcome to violet cube API, if you see this message, it means there is no queries entered")
})


//**************************************************************************
var equip_list = ["glove","top", "buttom","ring","hat","shoe","face","eye","weapon","badge","emblem","belt","earring","heart","pendant","secondary","shoulder","cape"]
const DEX = "DEX: +12%"
const INT = "INT: +12%"
const LUK = "LUK: +12%"
const STR = "STR: +12%"
const HP = "MAX HP: +12%"
const MP = "MAX MP: +12%"
const DEF = "DEF: +12%"
const ALL = "All Stats +9%"
const IG20 = "10% chance to ignore 20% of monster damage dealt"
const IG40 = "10% chance to ignore 40% of monster damage dealt"
const CD1S = "Skill Cooldown: -1 sec (-5% for under 10 sec, minimum cooldown of 5 sec)"
const CD2S = "Skill Cooldown: -2 sec (-5% for under 10 sec, minimum cooldown of 5 sec)"
const INVI3S = "Invisible +3 more sec, when hit"
const INVI2S = "Invisible +2 more sec, when hit"
const INVI4P = "4% chance to become invincible for 7 seconds when attacked"
const INVI2P = "2% chance to become invincible for 7 seconds when attacked"
const CD = "Critical Damage: +8%"
const MP15 = "Skill MP Cost: -15%"
const MP30 = "Skill MP Cost: -30%"
const MESO = "Mesos Obtained: +20%"
const DROP = "Item Drop Rate: +20%"
const ATT = "ATT: +12%"
const MATT = "Magic ATT: +12%"
const ATTLV = "ATT per 10 Character Levels: +1"
const MATTLV = "M.ATT per 10 Character Levels: +1"
const IED35 = "Ignore Enemy DEF: +35%"
const IED40 = "Ignore Enemy DEF: +40%"
const DMG = "Damage: +12%"
const CRIT = "critical rate: +12% "
const BOSS30 = "Boss Monster Damage: +30%"
const BOSS35 = "Boss Monster Damage: +35%"
const BOSS40 ="Boss Monster Damage: +40%"
const DEX9 = "DEX: +9%"
const INT9 = "INT: +9%"
const LUK9 = "LUK: +9%"
const STR9 = "STR: +9%"
const HP9 = "MAX HP: +9%"
const MP9 = "MAX MP: +9%"
const DEF9 = "DEF: +9%"
const ALL6 = "All Stats +6%"
const IG20U = "5% chance to ignore 20% of monster damage dealt"
const IG40U = "5% chance to ignore 40% of monster damage dealt"
const RECOV = "HP Recovery Items and Skills: +30%"
const REFLECT50 = "Reflect 50% damage at a chance"
const REFLECT70 = "Reflect 70% damage at a chance"
const STR1 = "STR per 10 Character Level: +1"
const DEX1 = "DEX per 10 Character Level: +1"
const INT1 = "INT per 10 Character Level: +1"
const LUK1 = "LUK per 10 Character Level: +1"
const ATT9 = "ATT: +9%"
const MATT9 = "Magic ATT: +9%"
const DMG9 = "Damage: +9%"
const CRIT9 = "critical rate: +9% "
const IED30 = "Ignore Enemy DEF: +30%"




// get request
// query parameter
// 1. type(equipment type)
// 2. stat(DEX,INT,STR,LUK,ALL,CD1S,CD2S,ATT,MATT,CD)
// 3. num(0-36)
// 4. numOfTry(100-100000)
router
  .route("/:id")
  .get((req, res) => {
    // console.log(req.user)
    var type = req.query.type; var stat = req.query.stat; var num = req.query.num; var numOfTry = req.query.numOfTry;
    main(type,stat,num,numOfTry,res); //main function

    res.send(`Get User With ID ${req.params}`)
  })


function main(typeOfEquip,stat,desiredNum,numOfTry,res){
    let isValid = true;
    if(!equip_list.includes(typeOfEquip)){res.statusCode = 401; res.send('Wrong equip input'); isValid = false}
    else if(desiredNum <= 0 || desiredNum > 36){res.statusCode = 401; res.send('Wrong num input'); isValid = false}
    else if(numOfTry < 100 || numOfTry > 100000){res.statusCode = 401; res.send('Wrong numOfTry input'); isValid = false}

    if(isValid){
        
    }

}





















//   .put((req, res) => {
//     res.send(`Update User With ID ${req.params.id}`)
//   })
//   .delete((req, res) => {
//     res.send(`Delete User With ID ${req.params.id}`)
//   })
// // **************************************************************************
// // param key word
// // whenever you go to a "id" url, run this function
// // param is a middleware, you have to call next() to continue the call. If user type in localhost:3000/user/2 
// // this middleware will first be ran, then run the get method at line 31 above
// const users = [{ name: "Kyle" }, { name: "Sally" }]
// router.param("id", (req, res, next, id) => {
//   req.user = users[id]
//   next()
// })
// // **************************************************************************
// function logger(req, res, next) {
//   console.log(req.originalUrl)
//   next()
// }

module.exports = router
