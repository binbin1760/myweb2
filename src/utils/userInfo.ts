// 存储用户信息
export function setUserInfo(user: Record<string, string>) {
    const userInfo = JSON.stringify(user)
    localStorage.setItem('userInfo', userInfo)
}
//  读取用户信息
export function getUsrInfo() {
    const userInfo = localStorage.getItem("userInfo")
    return JSON.parse(userInfo as unknown as string)
}
//  删除用户信息
export function delUserInfo() {
    localStorage.removeItem("userInfo")
}