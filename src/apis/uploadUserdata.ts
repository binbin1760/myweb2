import { request } from "@/request";

export function uploadUserdata(data: Record<string, unknown>) {
    return request({
        url: "/api/user",
        method: "post",
        data: data
    })
}