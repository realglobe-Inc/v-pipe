/**
 * Pipe implementation for v
 * @module v-pipe
 */
'use strict'

const VPipe = require('./VPipe')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  VPipe,
  create
})

module.exports = lib
