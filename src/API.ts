import axios from 'axios'
import store from './store'
import { ResponseCategoryAll, ResponseSoftwareList, ResponseSoftware } from './type.d'

class API {
  static getAllCategory (): Promise<ResponseCategoryAll> {
    return new Promise((resolve, reject) => {
      axios.get(store.state.backendOrigin + '/category/all')
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
      axios.get(store.state.backendOrigin + '/category/' + category)
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
      axios.get(store.state.backendOrigin + '/' + name)
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
}

export default API
