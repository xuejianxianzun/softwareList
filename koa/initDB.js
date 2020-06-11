/* eslint-disable @typescript-eslint/no-var-requires */
const { client, redisPrint } = require('./redis')
const data = require('./data')

// 使用 Set 保存软件名列表、分类列表、每个分类里的软件列表
// 使用 Hash 保存每个软件的信息
client.flushdb(() => {
  for (const item of data) {
    // 所有软件名
    client.sadd('softwareList', item.name)
    // 所有分类
    client.sadd('categoryList', item.category)
    // 每个分类包含的软件名
    client.sadd(item.category, item.name)

    // 每个软件的具体信息
    for (const [key2, value] of Object.entries(item)) {
      client.hset(item.name, key2, value)
    }
  }
})

setTimeout(() => {
  client.hgetall('Internet Download Manager', (err, reply) => {
    console.log(err)
    console.log(reply)
    process.exit()
  })
}, 1000)
