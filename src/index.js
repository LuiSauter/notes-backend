require('dotenv').config()
// arrancar servidor
const app = require('./app')
require('./database')// no necesita ser importado solo se ejecutara la db

const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
// obtenemos el valor 4000

module.exports = { app, server }
