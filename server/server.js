const express = require('express')
const { ServerResponse } = require('http')
const path = require('path')

const authRoutes = require('./routes/auth')
const usersRoutes = require('./routes/users')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/users')

module.exports = server
