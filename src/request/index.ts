import axios from 'axios'
import { getUsrInfo } from '@/utils'

const http = axios.create({
    timeout: 60000,
})




const userInfo = getUsrInfo()
// 请求拦截
http.interceptors.request.use(config => {
    if (userInfo?.token) {
        config.headers["Authorization"] = userInfo.token
    }
    return config
},
    error => {
        return Promise.reject(error)
    })
// 响应拦截---未做处理
http.interceptors.response.use(response => {
    return response.data.data
}, error => {
    return Promise.reject(error)
})

export { http as request } 