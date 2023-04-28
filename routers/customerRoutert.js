const express = require('express')
const router = express.Router()
const Controller = require('../controllers/customerController');

router.get('/', Controller.CustomersList)
router.post('/', Controller.createCustomers)
router.delete('/:id', Controller.deleteCustomers)

// router.get('/details', Controller.authorDetail)

module.exports = router
