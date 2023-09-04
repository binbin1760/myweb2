import { request } from "@/request";

export function login(data: any) {
    return request({
        url: "/api/login",
        method: "post",
        data: data
    })
}

export function isLogin() {
    return request({
        url: '/api/islogin',
        method: 'post',
        data: { message: '测试' }
    })
}