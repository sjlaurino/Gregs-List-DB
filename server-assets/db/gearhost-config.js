let mongoose = require('mongoose')


//This is the only thing that changes each project. Rest of the page is copy paste
const connectionString = 'mongodb://stevengregslist:gregslist!@den1.mongo1.gear.host:27001/stevengregslist'

let connection = mongoose.connection

//establishes connection to DB
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//console log errors
connection.on('error', err => {
  console.log('[Database Error]: ', err)
})

//confirm connection
connection.once('open', () => {
  console.log('succesfully connected to DB')
})
