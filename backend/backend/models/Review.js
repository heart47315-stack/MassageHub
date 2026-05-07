const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },

  therapist:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Therapist'
  },

  rating:Number,

  comment:String

},{
  timestamps:true
})

module.exports =
mongoose.model(
  'Review',
  reviewSchema
)