const express = require('express')
const router = express.Router()
const actionController = require('../controller/actionController')
const logsControllers = require('../controller/logsController')

router.get('/', logsControllers.save, actionController.detail)

module.exports = router
