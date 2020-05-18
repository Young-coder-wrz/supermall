<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      //尽量不用选择器找dom 用ref
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      //监听滚动
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", position => {
          this.$emit("getPosition", position)
        })
      }
      
      //监听下拉到底部
      if(this.pullUpLoad) {
        this.scroll.on("pullingUp",() =>{
          this.$emit("pullingUp")
        })
      }

    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      getY(){
        return this.scroll ? this.scroll.y : 0
      }
    },
  }
</script>

<style>

</style>