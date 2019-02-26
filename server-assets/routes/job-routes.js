const router = require('express').Router()
let job = require('../models/job')

//logger for coffee routes, unncessary, but shows the use of next()
router.use('*', (req, res, next) => {
  console.log('A new user in job Routes')
  next()
})

router.get('/', (req, res, next) => {
  job.find({})
    .then(jobs => {
      res.status(200).send(jobs)
    })
})

router.post('/', (req, res, next) => {
  job.create(req.body)
    .then(job => {
      res.status(201).send(job)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

router.put('/:id', (req, res, next) => {
  job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(job => {
      res.status(200).send(job)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

router.delete('/:id', (req, res, next) => {
  job.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('House Deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

module.exports = router