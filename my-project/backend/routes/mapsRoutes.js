const router =
require('express').Router()

const {
  searchPlace
} = require('../controllers/mapsController')

router.get('/search', searchPlace)

module.exports = router