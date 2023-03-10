const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : MONGO_DB_URI

if (!connectionString) {
  console.error('Missing file .env on project')
}

// Conexion a mongodb
mongoose.set('strictQuery', true)
mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  }).then(() => {

  }).catch(err => {
    console.error(err)
  })

process.on('uncaughtException', error => {
  console.log(error)
  mongoose.connection.close()
})
