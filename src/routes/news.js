const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

router.use('/:id', newsController.detail)
router.use('/', newsController.index)

module.exports = router
