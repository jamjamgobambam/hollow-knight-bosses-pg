const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const bossRouter = require('./routes/bosses')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/bosses/', bossRouter)

const SERVER_PORT = process.env.PORT || 8081

app.listen(SERVER_PORT, () => {
    console.log(`server listening at http://localhost:${SERVER_PORT}`)
})