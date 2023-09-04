import { request } from "@/request";

export function upload(data: Record<string, unknown>) {
    return request({
        url: "/api/upload",
        method: "post",
        data: data
    })
}

export function getTitle(title: string) {
    return request({
        url: "/api/upload/title",
        method: "post",
        data: { title }
    })
}

export function getSeries(series: string) {
    return request({
        url: "/api/upload/series",
        method: "post",
        data: { series }
    })
}

export function deleteImg(imgname: any) {
    return request({
        url: '/api/delete/img',
        method: "post",
        data: imgname
    })
}

export function getArticle(type: any) {
    return request({
        url: '/api/getarticleList',
        method: "post",
        data: { type }
    })
}

export function getArticleContent(title: string, type: number, seriesTitle?: string) {
    return request({
        url: '/api/getArticleContent',
        method: 'post',
        data: {
            title,
            type,
            seriesTitle
        }
    })
}