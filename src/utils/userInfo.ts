// 存储用户信息
export function setUserInfo(token: string) {
    localStorage.setItem('token', token)
}
//  读取用户信息
export function getUsrInfo() {
    return localStorage.getItem("token")
}
//  删除用户信息
export function delUserInfo() {
    localStorage.removeItem("token")
}