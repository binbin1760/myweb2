import imgCard from '@/assets/Avator-多老A梦.png'

const tsteData = {
    title: "需要加点动画",
    imgurl: imgCard,
    time: '2023-12-11 12:52:00',
    intro: '我还不知道怎么去弄iconfont的svg。。。。。',
    isTrend: true
}
const tsteData2 = {
    title: "需要加点动画",
    imgurl: imgCard,
    time: '2023-12-11 12:52:00',
    intro: '我还不知道怎么去弄iconfont的svg。。。。。',
    isTrend: false
}
export function getAlldata(type?: string) {
    return type === "article" ? tsteData : tsteData2
}

const mySocialieTags = ["bilibili", "github", "youjian", "QQ", "weixin"]
export function getMysocial() {
    return mySocialieTags
}

export function getTargetTypeData() {
    return "获取对应页面的文章列表"
}
// 获取文章或者动态 类型 及其数量
const aritcleTypeNumber = [
    { key: "Vue", Value: 15 },
    { key: "Ts", Value: 15 },
    { key: "vite", Value: 15 },
    { key: "node", Value: 15 },
]
export function getTypeNumber() {
    return aritcleTypeNumber
}