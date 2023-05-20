const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const path = require('path');

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '../frontend/build')));


app.use(express.json())
app.use('/api/blogs', blogRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to database, and listening on port', process.env.PORT);
        })
    })
    .catch((err) => {
        console.log('Could not connect to database');
    })