const Therapist =
require('../models/Therapist')

exports.getTherapists =
async(req,res)=>{

  const therapists =
  await Therapist.find()

  res.json(therapists)

}

exports.createTherapist =
async(req,res)=>{

  const therapist =
  await Therapist.create(req.body)

  res.json(therapist)

}

exports.searchNearby =
async(req,res)=>{

  const {lat,lng} = req.query

  const therapists =
  await Therapist.find()

  const nearby =
  therapists.filter(item=>{

    const distance =
    Math.sqrt(
      Math.pow(item.lat - lat,2) +
      Math.pow(item.lng - lng,2)
    )

    return distance < 1
  })

  res.json(nearby)

}