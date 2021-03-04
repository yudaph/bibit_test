const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const globalErrorController = require('./controller/errorController')
const searchRoutes = require('./routes/search')
const detailRoutes = require('./routes/detail')
const AppError = require('./utils/appError')

const app = express()

app.use(helmet())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use('/search', searchRoutes)
app.use('/detail', detailRoutes)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this website`, 404))
})

app.use(globalErrorController)

module.exports = app
