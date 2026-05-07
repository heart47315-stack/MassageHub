const Review =
require('../models/Review')

exports.createReview =
async(req,res)=>{

  const review =
  await Review.create(req.body)

  res.json(review)

}

exports.getReviews =
async(req,res)=>{

  const reviews =
  await Review.find()
  .populate('user')
  .populate('therapist')

  res.json(reviews)

}