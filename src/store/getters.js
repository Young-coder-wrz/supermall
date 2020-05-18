export default {
  getcartLength(state){
    return state.cartList.length
  },
  getcartList(state){
    return state.cartList
  },
  getTotalPrice(state){
    return state.cartList.filter(x => x.checked).reduce((prev,x) => prev += parseFloat(x.price) * x.count,0).toFixed(2)
  },
  setAllCheckState(state){
    return state.cartList.length > 0 ? state.cartList.filter(x => x.checked).length === state.cartList.length : false
  },
  getCheckLength(state){
    return state.cartList.filter(x => x.checked).length
  }
}