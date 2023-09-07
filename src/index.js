const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const route = require('./routes')
const app = express()
app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const port = 8080
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
