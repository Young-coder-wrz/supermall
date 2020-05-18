//Home页的网络请求 解耦层
import {request} from "./request"
export function getHomeMultiData() {
  return request({
    url:"/home/multidata",
    method:"get"
  })
}

export function getGoodsData(type, page) {
  return request({
    url:"/home/data",
    method:"get",
    params:{
      type,
      page
    }
  })
  
}