// Codigo de la coneccion a la base de datos
const mongoose = require('mongoose')
const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env
// le decimos que cree una base datos mongodb
const connectionString = NODE_ENV === 'test' ? MONGO_DB_URI_TEST : MONGO_DB_URI

// cuando la coneccion sea abierta ejecute algo por consola
mongoose.connect(connectionString).then(() => {
  console.log('DB is connected')
}).catch(err => console.log(err))

// por si se rompe algo quitamos la coneccion para que no quede zombie
process.on('uncaughtException', (err) => {
  console.log(err)
  mongoose.disconnect()
})
