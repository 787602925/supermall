<template>
  <div class="tabbar-item" @click="itemClick" :style="activeStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: "rgb(251, 105, 128)"
    }
  },
  computed:{
    isActive(){
      // 判断当前处于活跃状态的路由
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
      return this.isActive?{color: this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }

  }
};
</script>
<style>
@import url('../../../assets/iconfont/css/all.css');
.tabbar-item {
  /* 各item均等分 */
  flex: 1;
  text-align: center;
  
}
i {
  margin-top: 3px;
  font-size: 24px;
}
.tabbar-item div {
  font-size: 14px;
}

/* .active{
  color: rgb(251, 105, 128);
} */

</style>