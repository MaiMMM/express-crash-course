// # example query
// http://localhost:8081/nasa/id?index=1&index=2&index=3&acceptAllData=true&wantedData=lon&wantedData=lat&wantedData=BSTAR&testMode=true


const express = require("express")
const router = express.Router()
const nasa = require('../models/nasa')

router.post('/',async (req,res) => {
  console.log("here")
  const nasaData = new nasa ({
    lon: req.body.lon,
    lat: req.body.lat
  })

  try{
    const newnasaData = await nasaData.save()
    res.status(201).json(newnasaData) //201 means create successfully
  }catch(err){
    res.status(400).json({message:err.message}) //400 means user input error
  }

})

router
  .route("/:id")

  //get one
  .get(getOneData, (req, res) => {
    retData = res.nasaData;
    res.send(retData);
  })

  //update one
  // .patch(getOneData, async (req, res) => {
  //   if(req.body.lon != null){
  //     res.nasaData.lon = req.body.lon
  //   }
  //   if(req.body.lat != null){
  //     res.nasaData.lat = req.body.lat
  //   }
  //   try{
  //     const updatednasaData = await res.nasaData.save()
  //     // res.nasaData.save()
  //     res.json(updatednasaData)
  //   }catch(err){
  //     res.status(400).json({message:err.message})
  //   }
  // })

  //delete one
  .delete(async (req, res) => {
    try{
      await nasa.deleteOne({"":req.params.id}).exec()
      res.json({message:'Deleted nasaData'})
    }catch(err){
      res.status(500).json({message:err.message})
    }
  })





async function getOneData(req,res,next){
    let nasaData
    try{
        nasaData = await nasa.find({"":req.params.id}).exec()
        if(nasaData == null){
            return res.status(404).json({message:'Cannot find nasaData'})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }

    res.nasaData = nasaData
    next()
}




module.exports = router
