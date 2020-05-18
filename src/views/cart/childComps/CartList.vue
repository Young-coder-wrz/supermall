<template>
  <Scroll class="cart-scroll" ref="cartscroll">
    <cart-list-item v-for="(item, index) in getcartList" :key="index" :cartitem="item"></cart-list-item>
  </Scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import CartListItem from "./CartListItem"
import {mapGetters} from "vuex"
import {SETTARBARSTATE} from "store/mutationtype"

export default {
  name: "CartList",
  components:{
    Scroll,CartListItem
  },
  computed: {
    ...mapGetters(["getcartList"])
  },
  activated() {
    // this.$store.commit(SETTARBARSTATE,false)
    this.$refs.cartscroll.refresh()
  },
  deactivated() {
    // this.$store.commit(SETTARBARSTATE,true)
  },
}
</script>

<style scoped>
  .cart-scroll{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 89px;
    overflow: hidden;
  }
</style>