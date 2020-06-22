// eslint-disable-next-line @typescript-eslint/no-var-requires
const redis = require('redis')
const pass = '12345' // 数据库密码

const redisPrint = redis.print

const client = redis.createClient()

// 如果数据库没有密码，注释掉下面的 AUTH 方法
client.AUTH(pass, function (error) {
  console.error(error)
})

client.on('error', function (error) {
  console.error(error)
})

// 使用 1 号数据库
client.select(1)

module.exports = { client, redisPrint }
