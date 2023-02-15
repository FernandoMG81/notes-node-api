onst mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env

const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : MONGO_DB_URI

// Conexion a mongodb
mongoose.set('strictQuery', true)
// mongoose.connect(connectionString)
//   .then(() => {
//     console.log('Database connected')
//   }).then(() => {

//   }).catch(err => {
//     console.error(err)
//   })

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connectionString)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
