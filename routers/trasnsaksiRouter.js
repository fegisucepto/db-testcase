const express = require('express')
const router = express.Router()
const Controller = require('../controllers/transactionsController');

router.get('/', Controller.TransactionsList)
router.post('/', Controller.createTransactions)
router.delete('/:id', Controller.deleteTransactions)

// router.get('/details', Controller.authorDetail)

module.exports = router
