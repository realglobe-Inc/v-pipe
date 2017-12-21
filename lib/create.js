/**
 * Create a VPipe instance
 * @function create
 * @param {...*} args
 * @returns {VPipe}
 */
'use strict'

const VPipe = require('./VPipe')

/** @lends create */
function create (...args) {
  return new VPipe(...args)
}

module.exports = create
