const express = require('express')
const cors = require('cors')
const path = require('path')

const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')
const meetingRoutes = require('./routes/meetings')
const attendeesRoutes = require('./routes/attendees')


const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/meetings', meetingRoutes)
server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/attendees', attendeesRoutes)

module.exports = server
