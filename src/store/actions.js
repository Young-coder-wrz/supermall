import {
  SETTARBARSTATE,
  ADDCOUNTER,
  ADDTOCART
} from "./mutationtype"
export default {
  //actions中执行复杂操作异步等等
  //actions可以返回一个promise 外面回调
  addShopCart(context, palyload) {
    return new Promise((resolve, reject) => {
      //重复添加数量
      let flag = false
      for (let item of context.state.cartList) {
        if (item.iid === palyload.iid) {
          //修改数量
          context.commit(ADDCOUNTER, item)
          resolve("商品数量+1")
          flag = true
          break
        }
      }
      if (!flag) {
        //添加到购物车
        context.commit(ADDTOCART, palyload)
        resolve("添加到购物车")
      }
    })
  }
}