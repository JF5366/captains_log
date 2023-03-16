const express = require('express')
const router = express.Router()
const captainsLogController = require('../controllers/captainsLogControllers')

router.get('/', captainsLogController.index)
router.post('/', captainsLogController.create)
router.get('/new', captainsLogController.new)
router.delete('/:id', captainsLogController.delete)
router.put('/:id', captainsLogController.update)
router.get('/:id', captainsLogController.show)
router.get('/:id/edit', captainsLogController.edit)


module.exports = router
