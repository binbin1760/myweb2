import axios from 'axios'
import { getUsrInfo } from '@/utils'

const instance = axios.create({
    timeout: 60000,
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data; charset=utf-8'
    }
})
// 请求拦截
instance.interceptors.request.use(config => {
    const token = getUsrInfo()
    config.headers["Authorization"] = token
    return config
},
    error => {
        return Promise.reject(error)
    })
// 响应拦截---未做处理
instance.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})

export function updateQuillImage(data: any) {
    return instance.post('/api/quillimg', data)
}