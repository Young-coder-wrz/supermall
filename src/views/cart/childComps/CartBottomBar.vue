<template>
  <div class="bottom-bar">
    <div class="allcheck">
      <check-button :isChecked="setAllCheckState" @click.native="setAllCheck"></check-button>
      <span>全选</span>
    </div>
    <div class="content">
      <div class="content-desc">
        <span>合计:</span>
        <span class="total-price">{{getTotalPrice}}</span>
      </div>
      <div class="sub-btn" @click="clacClick">结算({{getCheckLength}})</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"
import {SETALLCHECK} from "store/mutationtype"
import {mapGetters} from "vuex"
export default {
  name: "CartBottomBar",
  components:{
    CheckButton
  },
  computed: {
    ...mapGetters(["getcartList", "getTotalPrice","setAllCheckState","getCheckLength"])
  },
  methods: {
    setAllCheck(){
      this.$store.commit(SETALLCHECK, this.setAllCheckState)
    },
    clacClick(){
      //两种情况 有商品，未选中 没有商品
      if(!this.getCheckLength){
        let res = this.getcartList.length === 0 ? "购物车为空" : "请选择商品"
        this.$toast.show(res) 
      }
      
    }
  },
}
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    background-color: #f6f6f6;
    height: 40px;
    justify-content: space-between;
    padding: 5px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  .allcheck{
    display: flex;
    align-items: center;
  }
  .allcheck span{ 
    color: #999;
    font-size: 13px;
  }
  .allcheck span{
    margin-left: 10px;
  }
  .content{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .content .content-desc{
    flex-grow: 1;
    font-size: 13px;
  }
  .content .content-desc .total-price{
    font-size: 12px;
    color: #ff6034;
  }
  .content .content-desc .total-price::before{
    content: "￥";
  }
  .content .sub-btn{
    flex-grow: 4;
    height: 32px;
    background-color: #ff6034;
    color: #fff;
    line-height: 32px;
    text-align: center;
    border-radius: 20px;
    font-size: 14px;
  }
</style>