const router =
require('express').Router()

const {

  getTherapists,
  createTherapist,
  searchNearby

} = require('../controllers/therapistController')

router.get('/', getTherapists)

router.post('/', createTherapist)

router.get('/nearby', searchNearby)

module.exports = router