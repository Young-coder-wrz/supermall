<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{getcartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import CartList from "./childComps/CartList"
import CartBottomBar from "./childComps/CartBottomBar"

import {mapGetters} from "vuex"
export default {
    name:"Cart",
    components: {
      NavBar,CartList,CartBottomBar
    },
    computed: {
      //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性： 数组语法，对象语法
      ...mapGetters(["getcartLength"])
    },
}
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
  }
  .cart{
    position: relative;
    height: 100vh;
  }
</style>