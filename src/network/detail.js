//detail页的网络请求
import {request} from "./request"
export function getDetailData(iid){
  return request({
    url:"/detail",
    params :{
      iid
    }
  })
}
export function getRecommendData(){
  return request({
    url:"/recommend"
  })
}
//数据整合
export class Goods{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice= itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}
export class Shops{
  constructor(shopInfo){
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
    this.fans = shopInfo.cFans;
  }
}
export class GoodParams{
  constructor(info, rule){
    this.image = info.images ? info.images[0] : '';
    this.info = info.set
    this.size = rule.tables
  }
}