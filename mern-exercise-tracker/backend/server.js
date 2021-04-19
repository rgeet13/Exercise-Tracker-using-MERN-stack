const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

const URI = process.env.MONGODB_URI

mongoose.connect(URI, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
 console.log(`MongoDB successfully connected on cluster : ${connection.host}`);
})

// Importing Routes
const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)

app.listen(PORT, () => {
 console.log(`Server is running on port: ${PORT}`);
})

