const { Template } = require("ejs")
const express = require("express")
const router = express.Router()
let hasSent = false;
// router.use(logger)
// http://localhost:3001/violetCube/id?type=glove&stat=CRIT&num=36&numOfTry=10000
// **************************************************************************
router.get("/", (req, res) => {
//   console.log(req.query.name)
  res.send("Welcome to violet cube API, if you see this message, it means there is no queries entered")
})


//**************************************************************************
var equip_list = ["glove","top", "buttom","ring","hat","shoe","face","eye","weapon","badge","emblem","belt","earring","heart","pendant","secondary","shoulder","cape"]
const supportedStat = ["DEX","INT","LUK","STR","allStat","HP","critialDamage","coolDown","ATT","MATT"];
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
const ALL6 = "All Stats: +6%"
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

    console.log(type)
    console.log(stat)
    console.log(num)
    console.log(numOfTry)

    let response = main(type,stat,num,numOfTry,res); //main function
    // res.setHeader('Content-Type', 'application/json');
    if(!hasSent){res.send(response);}



  })


//-----------------------------------Functions for rolling stat-------------------------------------------------------------------------------------
// Helper function for prime_random_select() and unprime_random_select()
function pickfromarr(lib, pos){
    if(lib.length !== pos.length){console.log("lib pos length different");console.log(lib.length);console.log(pos.length)}

    var sum = 0.0;
    for(let i = 0; i < pos.length; i++){ sum = sum + pos[i];}
    // console.log(sum)
    var random_var = Math.random() * sum; 
    // console.log(random_var);

    var new_sum = 0.0;
    for(let i = 0; i < pos.length; i++){ 
        new_sum += pos[i];
        if(new_sum > random_var){ 
            // console.log("new_sum = " + new_sum + "  random var = " +random_var)
            return lib[i]; 

        }

    }
    return lib[lib.length-1];
}

// input: typeOfEquip
// output random stat line
function prime_random_select(typeOfEquip){
    var hat_lib = [DEX,    INT,    STR,    LUK,    HP,     MP,     DEF,    ALL,    IG20,   IG40,   CD1S,   CD2S,   "Enable the Decent Advanced Bless skill"]
    var hat_pos = [8.88888,8.88888,8.88888,8.88888,8.88888,8.88888,8.88888,6.66666,6.66666,6.66666,6.66666,4.44444,6.66666]

    var top_lib = [DEX,   INT,   STR,   LUK,   HP,    MP,    DEF,   ALL,   IG20,  IG40,  INVI3S,INVI4P]
    var top_pos = [9.3023,9.3023,9.3023,9.3203,9.3202,9.3202,9.3203,6.9767,6.9767,6.9767,6.9767,6.9767]                                      

    var bottom_lib = [DEX,    INT,    STR,    LUK,    HP,     MP,     DEF,     ALL,   IG20,  IG40]
    var bottom_pos = [10.8108,10.8108,10.8108,10.8108,10.8108,10.8108,10.8108,8.1081, 8.1081,8.1081]

    var glove_lib = [DEX,   INT,   STR,   LUK,   HP,    MP,    DEF,   CD,    ALL,   IG20,  IG40,   "Enable the Decent Speed Infusion skill"  ]
    var glove_pos = [9.0909,9.0909,9.0909,9.0909,9.0909,9.0909,9.0909,9.0909,6.8181,6.8181,6.8181, 6.8181]

    var shoe_lib = [DEX,INT,STR,LUK,HP,MP,DEF,ALL,IG20,IG40,"Enable the Decent Combat Orders skill"]
    var shoe_pos = [10, 10, 10, 10, 10,10,10,7.5, 7.5, 7.5, 7.5]

    var cape_belt_shoulder_lib = [DEX,    INT,    STR,    LUK,    HP,     MP,     DEF,    ALL,   IG20,  IG40]
    var cape_belt_shoulder_pos = [10.8108,10.8108,10.8108,10.8108,10.8108,10.8108,10.8108,8.1081,8.1081,8.1081]

    //Face Accessory, Eye Accessory, Ring, Earring, Pendant
    var Accessory_lib = [DEX,   INT,   STR,   LUK,   HP,    MP,    DEF,   ALL,   MP15,  MP30,  MESO,  DROP]
    var Accessory_pos = [9.3023,9.3023,9.3023,9.3023,9.3023,9.3023,9.3023,6.9767,6.9767,6.9767,6.9767,6.9767  ]

    var weapon_lib = [DEX,  INT,  STR,  LUK,  ALL,  ATT,  MATT, CRIT, DMG,  ATTLV, MATTLV,IED35,IED40,BOSS30,BOSS35,BOSS40]
    var weapon_pos = [9.756,9.756,9.756,9.756,7.317,4.878,4.878,4.878,4.878,4.878, 4.878, 4.878,4.878,4.878, 4.878, 4.878]
    
    var secondary_lib = [DEX,   INT,   STR,   LUK,   ALL,   IG20,  IG40, ATT,  MATT, CRIT, DMG,  ATTLV, MATTLV,IED35,IED40,BOSS30,BOSS35,BOSS40]
    var secondary_pos = [8.5106,8.5106,8.5106,8.5106,6.3829,6.3829,6.3829,4.2553,4.2553,4.2553,4.2553,4.2553,4.2553,4.2553,4.2553,4.2553,4.2553,4.2553 ]

    var badge_heart_lib = [DEX,    INT,    STR,    LUK,    HP,     MP,     DEF,    ALL]
    var badge_heart_pos = [12.9032,12.9032,12.9032,12.9032,12.9032,12.9032,12.9032,9.6774]
    
    var emblem_lib = [DEX,    INT,    STR,    LUK,    ALL,   ATT,   MATT,  CRIT,  DMG,   ATTLV, MATTLV,IED35,IED40]
    var emblem_pos = [11.4285,11.4285,11.4285,11.4285,8.5714,5.7142,5.7142,5.7142,5.7142,5.7142,5.7142,5.7142,5.7142]
  
    var str = typeOfEquip;

    if (str === "hat"){return(pickfromarr(hat_lib,hat_pos))}
    if (str === "top"){return(pickfromarr(top_lib,top_pos))}
    if (str === "buttom"){return(pickfromarr(bottom_lib,bottom_pos))}
    if (str === "glove"){return(pickfromarr(glove_lib,glove_pos))}
    if (str === "shoe"){return(pickfromarr(shoe_lib,shoe_pos))}
    if (str === "belt" || str === "cape" || str === "shoulder"){return(pickfromarr(cape_belt_shoulder_lib,cape_belt_shoulder_pos))}
    if (str === "face" || str === "pendant" || str === "eye" || str === "ring" || str === "earring"){return(pickfromarr(Accessory_lib,Accessory_pos))}
    if (str === "weapon"){return(pickfromarr(weapon_lib,weapon_pos))}
    if (str === "secondary"){return(pickfromarr(secondary_lib,secondary_pos))}
    if (str === "badge" || str === "heart" ){return(pickfromarr(badge_heart_lib,badge_heart_pos))}
    if (str === "emblem"){return(pickfromarr(emblem_lib,emblem_pos))}
}

// input: typeOfEquip
// output random stat line
function unprime_random_select(typeOfEquip){
    var hat_lib = [DEX9,   INT9,   STR9,   LUK9,   HP9,     MP9,     DEF9,   ALL6,   IG20U,  IG40U,RECOV,   "Enable the Decent Mystic Door skill"]
    var hat_pos = [8.9285, 8.9285, 8.9285, 8.9285, 10.7142, 10.7142, 7.1428, 7.1428, 7.1428, 7.1428,7.1428,  7.1428]

    var top_lib = [DEX9,   INT9,   STR9,   LUK9,   HP9,     MP9,     DEF9,   ALL6,   IG20U,  IG40U, INVI2S,INVI2P,REFLECT50,REFLECT70,RECOV]
    var top_pos = [7.5757, 7.5757, 7.5757, 7.5757, 9.0909,	9.0909,  6.0606, 6.0606, 6.0606, 6.0606,6.0606,6.0606,6.0606,   3.0303,   6.0606]                                      

    var bottom_lib = [DEX9,   INT9,   STR9,   LUK9,  HP9,    MP9,    DEF9,   ALL6,   IG20U,  IG40U, RECOV, "Enable the Decent Decent Hyper Body skill"]
    var bottom_pos = [8.9285, 8.9285, 8.9285, 8.9285,10.8108,10.8108,7.1428, 7.1428, 7.1428, 7.1428,7.1428, 7.1428]

    var glove_lib = [DEX9,   INT9,   STR9,   LUK9,  HP9,    MP9,    DEF9,   ALL6,  STR1,  DEX1,  INT1,  LUK1,  IG20U,  IG40U, RECOV, "Enable the Decent Sharp Eyes skill"]
    var glove_pos = [8.3333, 8.3333, 8.3333, 8.3333,10,     10,     6.6666, 6.6666,1.6666,1.6666,1.6666,1.6666,6.6666, 6.6666,6.6666, 6.6666]

    var shoe_lib = [DEX9,   INT9,   STR9,   LUK9,  HP9,    MP9,    DEF9,   ALL6,   IG20U,  IG40U, RECOV, "Enable the Decent Decent Hyper Body skill"]
    var shoe_pos = [8.9285, 8.9285, 8.9285, 8.9285,10.7142 ,10.7142,7.1428,7.1428, 7.1428, 7.1428, 7.1428,7.1428]

    var cape_belt_shoulder_lib = [DEX9,  INT9,  STR9,  LUK9,  HP9,    MP9,    DEF9,  ALL6,  IG20U, IG40U, RECOV]
    var cape_belt_shoulder_pos = [9.6153,9.6153,9.6153,9.6153,11.5384,11.5384,7.6923,7.6923,7.6923,7.6923,7.6923]

    //Face Accessory, Eye Accessory, Ring, Earring, Pendant
    var Accessory_lib = [DEX9,   INT9,   STR9,   LUK9,   HP9,    MP9,    DEF9,  ALL6,  RECOV]
    var Accessory_pos = [11.3636,11.3636,11.3636,11.3636,13.6363,13.6363,9.0909,9.0909,9.0909]

    var weapon_lib = [DEX9,    INT9,    STR9,    LUK9,   ALL6,    ATT9,  MATT9, CRIT9,  DMG9, IED30,  BOSS30]
    var weapon_pos = [11.6279, 11.6279, 11.6279, 11.6279,9.3023,  6.9767,6.9767,9.3023, 6.9767,6.9767,6.9767]

    var secondary_lib = [DEX9,  INT9,  STR9,  LUK9, ALL6,  IG20U, IG40U,  ATT9,  MATT9, CRIT9,  DMG9, IED30,  BOSS30]
    var secondary_pos = [9.8039,9.8039,9.8039,9.8039,7.8431,7.8431,7.8431,5.8823,5.8823,7.8431,5.8823,5.8823, 5.8823]

    var badge_heart_lib = [DEX9,   INT9,   STR9,   LUK9,   HP9,    MP9,    DEF9,  ALL6,  RECOV]
    var badge_heart_pos = [11.3636,11.3636,11.3636,11.3636,13.6363,13.6363,9.0909,9.0909,9.0909]

    var emblem_lib = [DEX9,   INT9,   STR9,   LUK9,   ALL6,  ATT9,  MATT9, CRIT9,  DMG9, IED30  ]
    var emblem_pos = [12.5,   12.5,   12.5,   12.5,   10,    7.5,   7.5,  10,      7.5,  7.5]

    var str = typeOfEquip;

    if (str === "hat"){return(pickfromarr(hat_lib,hat_pos))}
    if (str === "top"){return(pickfromarr(top_lib,top_pos))}
    if (str === "buttom"){return(pickfromarr(bottom_lib,bottom_pos))}
    if (str === "glove"){return(pickfromarr(glove_lib,glove_pos))}
    if (str === "shoe"){return(pickfromarr(shoe_lib,shoe_pos))}
    if (str === "belt" || str === "cape" || str === "shoulder"){return(pickfromarr(cape_belt_shoulder_lib,cape_belt_shoulder_pos))}
    if (str === "face" || str === "pendant" || str === "eye" || str === "ring" || str === "earring"){return(pickfromarr(Accessory_lib,Accessory_pos))}
    if (str === "weapon"){return(pickfromarr(weapon_lib,weapon_pos))}
    if (str === "secondary"){return(pickfromarr(secondary_lib,secondary_pos))}
    if (str === "badge" || str === "heart" ){return(pickfromarr(badge_heart_lib,badge_heart_pos))}
    if (str === "emblem"){return(pickfromarr(emblem_lib,emblem_pos))}
}

// input: possibility (0-100)
// output: true or false (true -> isPrime; false -> isNotPrime)
function check_prime(num){
    var limit = Math.random()*100;
    if(limit < num){return true;}
    return false;
}

//input: typeOfEquip, primeRate(%chance of the line being a prime line)
//output: single stat line
function runOnce(typeOfEquip, primeRate){
    let isPrime = check_prime(primeRate);
    let ret = "";
    // console.log("isPrime:" + isPrime);

    if(isPrime){
        ret = prime_random_select(typeOfEquip);
    }else{
        ret = unprime_random_select(typeOfEquip)
    }

    //error checking
    if(ret === "" || ret == null){
        console.log("typeOfEquip is wrong or I fucked up");return -1; 
    }else{
        return ret;
    }

}


//-------------------------------------functions for calculating if a roll passes the desired stat--------------------------------------------------
// console.log(testString("dex","Dex: +12%")) = 12
// console.log(testString("dex","DEX per 10 Character Level: +1")) = 0
// console.log(testString("dex","All Stats: +9%")) = 9*1.15
// console.log(testString("dex","All Stats: +6%")) = 6*1.15
function testString(desiredStat, rolledStat){
    desiredStat = desiredStat.toLowerCase();
    rolledStat = rolledStat.toLowerCase();

    // dex, int , str, luk
    // console.log(testString("dex","Dex: +12%")) = 12
    // console.log(testString("dex","DEX per 10 Character Level: +1")) = 0
    // console.log(testString("dex","All Stats: +9%")) = 9*1.15
    // console.log(testString("dex","All Stats: +6%")) = 6*1.15
    if(desiredStat === "dex" || desiredStat === "str" || 
    desiredStat === "int" || desiredStat === "luk"){
        if(rolledStat.includes(desiredStat) && !rolledStat.includes("per")){
            return(rolledStat.replace(/\D+/g, ''));
        }
        else if(rolledStat.includes("all stats")){
            return(rolledStat.replace(/\D+/g, '') * 1.15);
        }
        else{
            return 0;
        }
    }

    //all stat
    //console.log(testString("allStat","All Stats: +6%")) = 6
    if(desiredStat === "allstat"){
        if(rolledStat.includes("all stats")){
            return(rolledStat.replace(/\D+/g, ''));
        }
        else{
            return 0;
        }
    }


    //HP
    //console.log(testString("HP","MAX HP: +9%")) = 9
    //console.log(testString("HP","MAX HP: +12%")) = 12
    //console.log(testString("HP","HP Recovery Items and Skills: +30%")) = 0
    if(desiredStat === "hp"){
        if(rolledStat.includes("max hp")){
            return(rolledStat.replace(/\D+/g, ''));
        }
        else{
            return 0;
        }
    }


    //Critical Damage
    //console.log(testString("criticalDamage","Critical Damage: +8%")) = 8
    if(desiredStat === "criticaldamage"){
        if(rolledStat.includes("critical damage")){
            return(rolledStat.replace(/\D+/g, ''));
        }
        else{
            return 0;
        }
    }


    //Cool Down
    //console.log(parseInt(testString("coolDown","Skill MP Cost: -15%"))) = 0
    //console.log(testString("coolDown","Skill Cooldown: -1 sec (-5% for under 10 sec, minimum cooldown of 5 sec)")) = 1
    if(desiredStat === "cooldown"){
        if(rolledStat.includes("skill cooldown")){
            return(('' + rolledStat.replace(/\D+/g, ''))[0]);
        }
        else{
            return 0;
        }
    }


    //att & matt
    //console.log(testString("ATT","ATT: +12%")) = 12
    //console.log(testString("ATT","ATT per 10 Character Levels: +1")) = 0
    //console.log(testString("mATT","Magic ATT: +9%")) = 9
    if(desiredStat = "att"){
        if(rolledStat.includes("att: +12%") && !rolledStat.includes("magic att: +12%")){return 12;}
        else if(rolledStat.includes("att: +9%") && !rolledStat.includes("magic att: +9%")){return 9;}
        else{return 0;}
    }

    if(desiredStat = "matt"){
        console.log("here1");
        if(rolledStat.includes("magic att: +12%")){return 12;}
        else if(rolledStat.includes("magic att: +9%")){return 9;}
        else{return 0;}
    }

}


// input: desiredStat,desiredTotalStat, a list of stats given by a single roll 
// (e.g.)
// 'STR: +12%',
// 'MAX MP: +9%',
// 'STR: +9%',
// 'DEX: +9%',
// 'DEX per 10 Character Level: +1',
// 'MAX HP: +9%'
//
// output: true / false
function ifRollPassDesiredNum(desiredStat,desiredNum, listOfRolledStat){
    let cumulativeStat = 0;
    for( let i = 0; i < listOfRolledStat.length; i++){
        temp = testString(desiredStat,listOfRolledStat[i]);
        cumulativeStat += parseInt(temp);
        // TESTING CODE IF MATCHING IS WRONG
        // console.log("desiredStat: "+ desiredStat + " / " + listOfRolledStat[i] + " result: " + temp);
    }
    // console.log(cumulativeStat);
    if(cumulativeStat >= desiredNum){
        return true;
    }
    // if(cumulativeStat >= desiredNum){console.log("success");}
}

//--------------------------------------------------------------------------------------------------------------------------------------------------

function checkQueryValidity(typeOfEquip,stat,desiredNum,numOfTry,res){
    let isValid = true;

    if(!equip_list.includes(typeOfEquip)){res.status(403).json({code:403, message:"equip doesn't exist, please double check your query",supported_equip : equip_list}); isValid = false}
    else if(desiredNum <= 0 || desiredNum > 36){res.status(403).json({code:403, message:"disired stat either too high or too low" }); isValid = false}
    else if(numOfTry < 100 || numOfTry > 100000){res.status(403).json({code:403, message:"too many tries" }); isValid = false}
    else if(!supportedStat.includes(stat)){res.status(403).json({code:403, message:"stat doesn't exist, please double check your query",supported_stat : supportedStat}); isValid = false}
    hasSent = !isValid;
    return isValid;
}


function main(typeOfEquip,stat,desiredNum,numOfTry,res){
    let isValid = checkQueryValidity(typeOfEquip,stat,desiredNum,numOfTry,res);
    let numOfSuccess = 0


    if(isValid){

        for(let i = 0; i < numOfTry; i++){
            let listOfRolledStat = [runOnce(typeOfEquip,100),runOnce(typeOfEquip,1),runOnce(typeOfEquip,1),
                                    runOnce(typeOfEquip,10),runOnce(typeOfEquip,1),runOnce(typeOfEquip,1)];
            if(ifRollPassDesiredNum(stat,desiredNum,listOfRolledStat)){
                numOfSuccess += 1;
            }

        }
    }
    
    const returnObj = {
        desiredStatRet: stat,
        desiredNumRet: desiredNum,
        numOfTryRet: numOfTry,
        numOfSuccessRet: numOfSuccess,
        successRateRet: (numOfSuccess/numOfTry*100).toFixed(2).toString(),
        avgCubeNeeded: (1/(numOfSuccess/numOfTry)).toFixed(2).toString()
    };

    console.log("Desired Stat: " + stat + " " + desiredNum + 
        "\nNumber of rolls: " + numOfTry.toString() + 
    "\nSuccess roll: " + numOfSuccess.toString() + " \nRate: " + 
    (numOfSuccess/numOfTry*100).toFixed(2).toString() + "%" +
    "\nAverage Violet Cube(s) needed: " + (1/(numOfSuccess/numOfTry)).toFixed(2).toString());

    return returnObj;
}

// console.log(runOnce("glove", 100));
// main("top", "hp", 30, 10000, "any");
// console.log(testString("ATT", "Magic ATT: +9%"));




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
