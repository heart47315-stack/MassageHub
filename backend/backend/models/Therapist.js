const mongoose = require('mongoose')

const therapistSchema = new mongoose.Schema({

  name:String,

  image:String,

  location:String,

  bio:String,

  services:[String],

  price:Number,

  rating:{
    type:Number,
    default:5
  },

  lat:Number,

  lng:Number

},{
  timestamps:true
})

module.exports =
mongoose.model(
  'Therapist',
  therapistSchema
)