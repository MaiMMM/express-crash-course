// # example query
// http://localhost:8081/nasa/id?index=1&index=2&index=3&acceptAllData=true&wantedData=lon&wantedData=lat&wantedData=BSTAR&testMode=true


const express = require("express")
const router = express.Router()
let hasSent = false;
let testMode = false;
var nasaData = require('./data.json')
const nasa = require('../models/nasa')

// **************************************************************************
// get request
// query parameter
// 1. index (array of number, or ALL) 
// 2. acceptAllData (false or true )
// 3. wantedData (array of string)
// 4. testMode (true or false)

router.get("/",async (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  // if(!hasSent){res.send(response);}
  // res.send("Welcome to GitMaster NASA API, if you see this message, it means there is no queries entered")
  try{
    const nasaAll = await nasa.find()
    res.json(nasaAll)
  }catch(err) {
      res.status(500).json({message:err.message})
  }
})


router
  .route("/:id")
  .get(async (req, res) => {

    // get query
    var index = req.query.index; var acceptAllData = req.query.acceptAllData; var wantedData = req.query.wantedData; testMode = req.query.testMode;
    // console.log (index,acceptAllData,wantedData,testMode);
    
    //run main
    let response = await main(index, acceptAllData, wantedData, testMode); //main function
    console.log(response)

    //send back info
    res.json(response);
  })



function filterData(allowed, singleObj){
  const filtered = Object.fromEntries(
    Object.entries(singleObj).filter(
      ([key, val])=>allowed.includes(key)
    )
  );
  return filtered;
}





async function main(index, acceptAllData, wantedData, testMode){
  // var nasaData = require('./data.json')

  console.log(index);

  let indexedData;  
  try{
    indexedData = await nasa.find({"":index}).exec()
    return indexedData;
  }catch(err){
    return err.message;
  }

  
  // for(let i = 0; i < index.length; i++){
  //   let allowed = wantedData;

  //   if(acceptAllData === 'true'){
  //     indexedData.push(nasaData[i]);
  //     console.log('here');
  //   }else{
  //     indexedData.push(filterData(allowed,nasaData[i]));
  //   }
  // }

}





module.exports = router
