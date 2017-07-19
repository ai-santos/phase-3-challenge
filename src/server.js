import express from 'express'
import routes from './routes'
import logger from 'morgan'
import bodyParser from 'body-parser'

const server = express()

//middleware
server.use(logger('dev'))
server.use(express.static(__dirname+'/assets'))
server.use(bodyParser.urlencoded({ extended: true }))

//static routes
server.use('/', routes)

//local server
server.listen(process.env.PORT || 3000)