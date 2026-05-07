const router =
require('express').Router()

const {

  createReview,
  getReviews

} = require('../controllers/reviewController')

router.post('/', createReview)

router.get('/', getReviews)

module.exports = router