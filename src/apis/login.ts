import { request } from "@/request";

export function login(key: string, type: string) {
    return request({
        url: "/api/login",
        method: "get",
        params: {
            key: key,
            type: type
        }
    })
}