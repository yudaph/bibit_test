const catchAsync = require('../utils/catchAsync')
const axios = require('axios')

exports.search = catchAsync(async (req, res, next) => {
  let data
  await axios
    .get('http://www.omdbapi.com/?apikey=f02c1009&' + req.body.params)
    .then(function (response) {
      data = response.data.Search
    })
    .catch(function (error) {
      console.log(error)
    })

  res.status(200).json({
    data,
  })
})

exports.detail = catchAsync(async (req, res, next) => {
  let data
  await axios
    .get('http://www.omdbapi.com/?apikey=f02c1009&' + req.body.params)
    .then(function (response) {
      data = response.data
    })
    .catch(function (error) {
      console.log(error)
    })

  res.status(200).json({
    data,
  })
})
