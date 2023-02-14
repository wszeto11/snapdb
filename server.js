const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
  res.send({ msg: 'Server Running' })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
