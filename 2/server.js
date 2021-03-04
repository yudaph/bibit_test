const db = require('./models')
const PORT = process.env.PORT || 8000
const app = require('./app')

db.sequelize.sync().then(() => {
  'DB KONEK'
})
const server = app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})
module.exports = server
