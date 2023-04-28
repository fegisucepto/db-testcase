const express = require('express')
const router = express.Router()

router.use('/transactions', require('./trasnsaksiRouter.js'))
router.use('/customers', require('./customerRoutert.js'))

module.exports = router


