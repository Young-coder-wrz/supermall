<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    padding: 10px 0;
    font-size: 12px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
  }
</style>