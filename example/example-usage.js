'use strict'

const vPipe = require('v-pipe')
const vSpotWS = require('v-spot-ws')

async function tryExample () {
  const client = vSpotWS.client()
  await client.connect('https://v.realglobe.work')

  {
    const pipe = vPipe(client, {
      'stdout': (out) => {/*...*/},
      'stderr': (err) => {/*...*/},
    })

    await pipe.trail('-f', 'var/log/server.log')
  }
}

tryExample().catch((err) => console.error(err))
