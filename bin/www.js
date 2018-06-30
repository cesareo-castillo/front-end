'use strict'

const http = require('http')
const path = require('path')
const express = require('express')
const socket = require('socket.io')
const chalk = require('chalk')
const debug = require('debug')('front_end:demo')
const app = express()
const www = http.createServer(app)
const port = process.env.PORT || 3000
const io = socket(www)

io.on('connection', socket=>{
    console.log(socket.id)
    debug(`Socket.IO Client ${chalk.green.bold('connected')} with id: ${chalk.yellow.bold(socket.id)}`)
})

app.use(express.static(path.join(__dirname,'../public')))

function handleFatalError(err){
    console.log(`${chalk.red.bold('Error fatal:')}${chalk.red(err.message)}`)
    console.log('Error stack:' + err.stack)
    process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledException', handleFatalError)

www.listen(port, ()=>{
    console.log(`Servidor Web Express escuchando peticiones en puerto ${port}`)
})
