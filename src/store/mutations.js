import {SETTARBARSTATE, ADDCOUNTER, ADDTOCART,UPDATECARTITEM,SETALLCHECK} from "./mutationtype"
export default {
  //mutations中每个方法尽量满足功能单一
  //操作state
  [SETTARBARSTATE](state, payload) {
    if (payload != null) {
      state.tarbarState = payload
    }
  },
  [ADDCOUNTER](state, palyload) {
    palyload.count += 1
  },
  [ADDTOCART](state, palyload) {
    palyload.checked = true
    state.cartList.push(palyload)
  },
  [UPDATECARTITEM](state, palyload){
    let item = state.cartList.find(x => x.iid === palyload)
    item.checked = !item.checked
  },
  [SETALLCHECK](state,palyload){
    state.cartList.forEach(x => {
      x.checked = !palyload
    })
  }
}