const express = require('express')
const router = express.Router()
const captainsLogController = require('../controllers/captainsLogControllers')

router.get('/', captainsLogController.index)
router.post('/', captainsLogController.create)
router.get('/new', captainsLogController.new)
router.get('/:id', captainsLogController.show)

module.exports = router
