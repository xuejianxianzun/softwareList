import axios from 'axios'
import store from './store'
import { ResponseCategoryAll, ResponseSoftwareList, ResponseSoftware, CategoryData } from './type.d'

class API {
  static getAllCategory (): Promise<ResponseCategoryAll> {
    return new Promise((resolve, reject) => {
      axios.get('/category/all')
        .then(res => {
          const result = res.data as ResponseCategoryAll
          if (res.status === 200) {
            resolve(result)
          } else {
            reject(new Error(`Status error: ${res.status}`))
          }
        })
    })
  }

  static getSoftwareList (category: string): Promise<ResponseSoftwareList> {
    return new Promise((resolve, reject) => {
      axios.get('/category/' + category)
        .then(res => {
          const result = res.data as ResponseSoftwareList
          if (res.status === 200) {
            resolve(result)
          } else {
            reject(new Error(`Status error: ${res.status}`))
          }
        })
    })
  }

  static search (word: string): Promise<ResponseSoftwareList> {
    return new Promise((resolve, reject) => {
      axios.get('/search/' + word)
        .then(res => {
          const result = res.data as ResponseSoftwareList
          if (res.status === 200) {
            resolve(result)
          } else {
            reject(new Error(`Status error: ${res.status}`))
          }
        })
    })
  }

  static getSoftware (name: string): Promise<ResponseSoftware> {
    return new Promise((resolve, reject) => {
      axios.get('/' + name)
        .then(res => {
          const result = res.data as ResponseSoftware
          if (res.status === 200) {
            resolve(result)
          } else {
            reject(new Error(`Status error: ${res.status}`))
          }
        })
    })
  }

  static getCategoryCN (name: string) {
    const allList = store.state.categoryList as CategoryData[]

    for (const list of allList) {
      if (list.name === name) {
        return list.cn
      }
    }

    return ''
  }

  static getCategoryFromURL () {
    const path = location.pathname
    if (path.includes('/category/')) {
      const array = path.split('/')
      const name = array[array.length - 1]
      return name
    }

    return ''
  }
}

export default API
