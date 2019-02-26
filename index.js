let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

//initialize connection to database
require('./server-assets/db/gearhost-config')

//middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


//routes
let houseRoutes = require('./server-assets/routes/house-routes')
let jobroutes = require('./server-assets/routes/job-routes')

server.use('/api/houses', houseRoutes)
server.use('/api/jobs', jobroutes)

//CatchAll
server.use('*', (req, res, next) => {
  res.status(404).send('No Matching Routes')
})

//StartServer
server.listen(port, () => {
  console.log('Server running on port:', port);

})