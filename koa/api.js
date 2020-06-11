/* eslint-disable @typescript-eslint/no-var-requires */
const { client, redisPrint } = require('./redis')

class API {
  static async getNameList () {
    return new Promise((resolve, reject) => {
      client.smembers('softwareList', (err, reply) => {
        if (err) {
          reject(err)
        } else {
          resolve(reply)
        }
      })
    })
  }

  static async getCategoryList () {
    return new Promise((resolve, reject) => {
      client.smembers('categoryList', (err, reply) => {
        if (err) {
          reject(err)
        } else {
          resolve(reply)
        }
      })
    })
  }

  static async getCategory (categroy) {
    return new Promise((resolve, reject) => {
      client.smembers(categroy, async (err, reply) => {
        if (err) {
          reject(err)
        } else {
          if (reply.length === 0) {
            resolve(reply)
          }
          const result = []
          for (const name of reply) {
            const data = await this.getSoftware(name)
            result.push(data)
            if (result.length === reply.length) {
              resolve(result)
            }
          }
        }
      })
    })
  }

  static async getDefaultList (number = 6) {
    return new Promise((resolve, reject) => {
      client.smembers('nameList', async (err, reply) => {
        if (err) {
          reject(err)
        } else {
          if (reply.length === 0) {
            resolve(reply)
          }
          if (reply.length < number) {
            number = reply.length
          }
          reply = reply.splice(0, number)
          const result = []
          for (const name of reply) {
            const data = await this.getSoftware(name)
            result.push(data)
            if (result.length === reply.length) {
              resolve(result)
            }
          }
        }
      })
    })
  }

  static async getSoftware (name) {
    return new Promise((resolve, reject) => {
      client.hgetall(name, (err, reply) => {
        if (err) {
          reject(err)
        } else {
          resolve(reply)
        }
      })
    })
  }

  static async search (word) {
    return new Promise((resolve, reject) => {
      this.getNameList().then(async (softwareList) => {
        const wordList = word.split(' ') // 如果搜索词以空格分开，则分割为数组
        let searchNo = 0
        const result = []
        for (const name of softwareList) {
          const data = await this.getSoftware(name)
          searchNo++
          if (
            wordList.some((val) => {
              return data.content.includes(val)
            })
          ) {
            result.push(data)
          }
          if (searchNo === softwareList.length) {
            resolve(result)
          }
        }
      })
    })
  }
}

module.exports = { API }
