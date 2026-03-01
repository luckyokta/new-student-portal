const express = require('express')
const app = express()
const port = 3000

const mongoConnect = require('./configurations/mongoConnect')
const routes = require('./controllers')

app.use(express.json())
app.use(express.urlencoded())
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})