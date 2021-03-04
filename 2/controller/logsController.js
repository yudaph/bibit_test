const db = require('../models')
const catchAsync = require('../utils/catchAsync')

exports.save = catchAsync(async (req, res, next) => {
  const [endpoint, params] = req.originalUrl.split('?')
  await db.Logs.create({
    endpoint,
    params,
  })
  req.body.params = params
  next()
})
