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