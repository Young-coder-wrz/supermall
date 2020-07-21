<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick"> 
        <img src="~assets/img/common/back.png" alt="返回">
      </div>
      <div slot="center" class="title">
        <div class="title_item" 
          v-for="(item, index) in titles" :key="index" 
          :class="{active:currentIndex===index}"
          @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ["商品", "参数", "评论", "推荐"],
        currentIndex:0
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index){
        this.currentIndex = index
        this.$emit("titleClick", index)
      },
      backClick(){
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .title{
    color: #000;
    display: flex;
    font-size: 13px;
  }
  .title_item{
    flex-grow: 1;
  }
  .back img{
    width: 25px;
    height: 25px;
    opacity: 0.6;
    margin: 8px 5px 5px 5px;
  }
  .active{
    color: var(--color-high-text);
  }
</style>