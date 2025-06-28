const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT 
const hostName = process.env.HOST_NAME

app.get('/', (req, res) => {
  res.send('Hello World!!!??')
})
 app.get('/abc', (req, res) => {
  res.send('Hello abc!!!!!')
})

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port} and host ${hostName}`)
})
