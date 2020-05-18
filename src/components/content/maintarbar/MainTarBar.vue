<template>
  <div>
    <tar-bar>
      <tar-bar-item path="/home" activecolor="deepPink">
        <img slot="item-icon" src="~assets/img/tarbar/home.png">
        <img slot="item-icon-active" src="~assets/img/tarbar/home-active.png">
        <div slot="item-title">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category" activecolor="deepPink">
        <img slot="item-icon" src="~assets/img/tarbar/category.png">
        <img slot="item-icon-active" src="~assets/img/tarbar/category-active.png">
        <div slot="item-title">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/cart" activecolor="deepPink">
        <img slot="item-icon" src="~assets/img/tarbar/shopcart.png">
        <img slot="item-icon-active" src="~assets/img/tarbar/shopcart-active.png">
        <div slot="item-title">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/profile" activecolor="deepPink">
        <img slot="item-icon" src="~assets/img/tarbar/profile.png">
        <img slot="item-icon-active" src="~assets/img/tarbar/profile-active.png">
        <div slot="item-title">我的</div>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
  import TarBar from 'components/common/tarbar/TarBar'
  import TarBarItem from 'components/common/tarbar/TarBarItem'
  export default {
    name:"MainTarBar",
    components:{
        TarBar,TarBarItem
    }
  }
</script>

<style>

</style>