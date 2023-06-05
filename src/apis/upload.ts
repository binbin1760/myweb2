import { request } from "@/request";

export function upload(data: Record<string, unknown>) {
    return request({
        url: "/api/upload",
        method: "post",
        data: data
    })
}