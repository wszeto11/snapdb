const express = require('express')
// const routes = require('./routes')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const { default: mongoose } = require('mongoose')
require('dotenv/config')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const { Card } = require('./models')
const { Ability } = require('./models')
// require() imports and middleware here ^

// const PORT = process.env.PORT || 3023;

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
// app.use() middleware here ^

// app.use('/api')
// app.use(routes)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// DB CONNECTION //
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connected')
  })
  .catch((err) => {
    console.log(err)
  })

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
