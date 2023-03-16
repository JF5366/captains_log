const express = require('express')
const router = express.Router()
const foodLogController = require('../controllers/foodLogControllers')

router.get('/', foodLogController.index)
router.post('/', foodLogController.create)
router.get('/new', foodLogController.new)
router.delete('/:id', foodLogController.delete)
router.put('/:id', foodLogController.update)
router.get('/:id', foodLogController.show)
router.get('/:id/edit', foodLogController.edit)


module.exports = router