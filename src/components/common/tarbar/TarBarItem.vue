<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TarBarItem',
    props: {
      path: {
        type: String,
      },
      activecolor: {
        type: String,
        default: "blue"
      }
    },
    data() {
      return {}
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle() {
        return this.isActive ? {
          color: this.activecolor
        } : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    },
  }
</script>
<style scoped>
  .tab-bar-item {
    text-align: center;
    flex-grow: 1;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 2px 0;
    margin-top: 5px;
  }
</style>