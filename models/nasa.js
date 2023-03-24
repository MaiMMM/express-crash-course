const mongoose = require('mongoose')

const nasaSchema = new mongoose.Schema({
    "": {
        "type": "Number"
      },
      "lon": {
        "type": "Number"
      },
      "lat": {
        "type": "Number"
      },
      "time": {
        "type": "Date"
      },
      "BSTAR": {
        "type": "String"
      },
      "CDH": {
        "type": "String"
      },
      "CDM": {
        "type": "String"
      },
      "CDQ": {
        "type": "String"
      },
      "CN": {
        "type": "String"
      },
      "DISPH": {
        "type": "Number"
      },
      "EFLUX": {
        "type": "String"
      },
      "EVAP": {
        "type": "String"
      },
      "FRCAN": {
        "type": "Number"
      },
      "FRCCN": {
        "type": "Number"
      },
      "FRCLS": {
        "type": "String"
      },
      "FRSEAICE": {
        "type": "Number"
      },
      "GHTSKIN": {
        "type": "String"
      },
      "HFLUX": {
        "type": "String"
      },
      "HLML": {
        "type": "String"
      },
      "NIRDF": {
        "type": "String"
      },
      "NIRDR": {
        "type": "String"
      },
      "PBLH": {
        "type": "String"
      },
      "PGENTOT": {
        "type": "String"
      },
      "PRECANV": {
        "type": "Number"
      },
      "PRECCON": {
        "type": "Number"
      },
      "PRECLSC": {
        "type": "String"
      },
      "PRECSNO": {
        "type": "String"
      },
      "PRECTOT": {
        "type": "String"
      },
      "PRECTOTCORR": {
        "type": "String"
      },
      "PREVTOT": {
        "type": "String"
      },
      "QLML": {
        "type": "String"
      },
      "QSH": {
        "type": "String"
      },
      "QSTAR": {
        "type": "String"
      },
      "RHOA": {
        "type": "String"
      },
      "RISFC": {
        "type": "String"
      },
      "SPEED": {
        "type": "String"
      },
      "SPEEDMAX": {
        "type": "String"
      },
      "TAUGWX": {
        "type": "String"
      },
      "TAUGWY": {
        "type": "String"
      },
      "TAUX": {
        "type": "String"
      },
      "TAUY": {
        "type": "String"
      },
      "TCZPBL": {
        "type": "String"
      },
      "TLML": {
        "type": "String"
      },
      "TSH": {
        "type": "String"
      },
      "TSTAR": {
        "type": "String"
      },
      "ULML": {
        "type": "String"
      },
      "USTAR": {
        "type": "String"
      },
      "VLML": {
        "type": "String"
      },
      "Z0H": {
        "type": "String"
      },
      "Z0M": {
        "type": "String"
      },
      "Var_BSTAR": {
        "type": "String"
      },
      "Var_CDH": {
        "type": "String"
      },
      "Var_CDM": {
        "type": "String"
      },
      "Var_CDQ": {
        "type": "String"
      },
      "Var_CN": {
        "type": "String"
      },
      "Var_DISPH": {
        "type": "Number"
      },
      "Var_EFLUX": {
        "type": "String"
      },
      "Var_EVAP": {
        "type": "String"
      },
      "Var_FRCAN": {
        "type": "Number"
      },
      "Var_FRCCN": {
        "type": "Number"
      },
      "Var_FRCLS": {
        "type": "String"
      },
      "Var_FRSEAICE": {
        "type": "Number"
      },
      "Var_GHTSKIN": {
        "type": "String"
      },
      "Var_HFLUX": {
        "type": "String"
      },
      "Var_HLML": {
        "type": "String"
      },
      "Var_NIRDF": {
        "type": "String"
      },
      "Var_NIRDR": {
        "type": "String"
      },
      "Var_PBLH": {
        "type": "String"
      },
      "Var_PGENTOT": {
        "type": "String"
      },
      "Var_PRECANV": {
        "type": "Number"
      },
      "Var_PRECCON": {
        "type": "Number"
      },
      "Var_PRECLSC": {
        "type": "String"
      },
      "Var_PRECSNO": {
        "type": "String"
      },
      "Var_PRECTOT": {
        "type": "String"
      },
      "Var_PRECTOTCORR": {
        "type": "String"
      },
      "Var_PREVTOT": {
        "type": "String"
      },
      "Var_QLML": {
        "type": "String"
      },
      "Var_QSH": {
        "type": "String"
      },
      "Var_QSTAR": {
        "type": "String"
      },
      "Var_RHOA": {
        "type": "String"
      },
      "Var_RISFC": {
        "type": "String"
      },
      "Var_SPEED": {
        "type": "String"
      },
      "Var_SPEEDMAX": {
        "type": "String"
      },
      "Var_TAUGWX": {
        "type": "String"
      },
      "Var_TAUGWY": {
        "type": "String"
      },
      "Var_TAUX": {
        "type": "String"
      },
      "Var_TAUY": {
        "type": "String"
      },
      "Var_TCZPBL": {
        "type": "String"
      },
      "Var_TLML": {
        "type": "String"
      },
      "Var_TSH": {
        "type": "String"
      },
      "Var_TSTAR": {
        "type": "String"
      },
      "Var_ULML": {
        "type": "String"
      },
      "Var_USTAR": {
        "type": "String"
      },
      "Var_VLML": {
        "type": "String"
      },
      "Var_Z0H": {
        "type": "String"
      },
      "Var_Z0M": {
        "type": "String"
      }
})

module.exports = mongoose.model('nasa', nasaSchema)

