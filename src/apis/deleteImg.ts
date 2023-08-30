import { request } from '@/request'


export function deleteImg(imgname: any) {
    return request({
        url: '/api/delete/img',
        method: "post",
        data: imgname
    })
}