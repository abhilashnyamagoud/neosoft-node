const express = require('express')
const router= express.Router()

const dataController=require('../app/controllers/dataCltr')

router.post('/api/adddata',dataController.create)

router.get('/api/getdata',dataController.list)

module.exports = router