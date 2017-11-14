const express = require('express')
const path = require('path')
const volleyball = require('volleyball')

const PORT = process.env.PORT || 3000

const app = express()

app.use(volleyball)

// Static
app.use(express.static(path.resolve(__dirname, '..', 'front')))
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')))

// Errors handler
app.use(function (err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

// Handle every routes
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '..', 'front', 'index.html'))
})

// Listen on port 3000
app.listen(PORT, function () {
  console.log('Server listening on port %d', PORT)
})
