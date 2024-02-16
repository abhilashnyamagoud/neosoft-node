const Data=require('../models/data')

const dataController= {}

dataController.list = (req, res) => {
    Data.find({ user: req.id })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
}

dataController.create = (req, res) => {
    console.log(req.msg)
    const body = req.body
    const customer = new Data(body)
    customer.user = req.id
    customer.save()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = dataController