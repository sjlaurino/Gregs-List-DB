const router = require('express').Router()
let house = require('../models/house')

//logger for coffee routes, unncessary, but shows the use of next()
router.use('*', (req, res, next) => {
  console.log('A new user in house Routes')
  next()
})

router.get('/', (req, res, next) => {
  house.find({})
    .then(houses => {
      res.status(200).send(houses)
    })
})

router.post('/', (req, res, next) => {
  house.create(req.body)
    .then(house => {
      res.status(201).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

router.put('/:id', (req, res, next) => {
  house.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(house => {
      res.status(200).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

router.delete('/:id', (req, res, next) => {
  house.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('House Deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//Dont forget this!
module.exports = router