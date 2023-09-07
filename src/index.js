const path = require('path')
const express = require('express')
const morgan = require('morgan')

const route = require('./routes')
const app = express()
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = 3001
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
