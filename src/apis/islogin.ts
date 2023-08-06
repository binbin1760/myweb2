import { request } from "@/request";

export function isLogin() {
    return request({
        url: '/api/islogin',
        method: 'post',
        data: { message: '测试' }
    })
}