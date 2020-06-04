// eslint-disable-next-line @typescript-eslint/no-var-requires
const redis = require('redis')
const pass = '12345'

const redisPrint = redis.print

const client = redis.createClient()
client.AUTH(pass, function (error) {
  console.error(error)
})

client.on('error', function (error) {
  console.error(error)
})

client.select(1)

module.exports = { client, redisPrint }
