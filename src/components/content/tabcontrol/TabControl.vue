<template>
  <!--文字内容不同，不必使用插槽-->
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item" class="tab-control-item" :class="{active:currentIndex===index}"
      @click="clickHandle(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      clickHandle(index) {
        this.currentIndex = index
        this.$emit("changeType",index)
      }
    },
  }
</script>

<style>
  .tab-control {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>