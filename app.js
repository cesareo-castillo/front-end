'use strict'

const color = require('chalk')
const debug = require('debug')('front_end:demo')

let msg = 'Hola Mundo'
console.log('El mensaje es: ' + msg)
console.log(`El Mensaje es: ${color.yellow(msg)}`)
debug(`El Mensaje es: ${color.yellow(msg)}`)
