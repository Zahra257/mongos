const mongoose = require('mongoose')
 require('dotenv').config()
const database = 'people'


const server = mongoose.connect(`mongodb://${MONGO_URI}/${database}`,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('We are connected to the DB'))
.catch(error => console.log('something happened', error))


module.exports={server}