<template>
  <div class="myTabBar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <i class="fas fa-home"></i>
        <div>首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <i class="fas fa-align-justify"></i>
        <div>分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <i class="fas fa-shopping-cart"></i>
        <div>购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <i class="fas fa-user"></i>
        <div>我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabBar from "@/components/common/tabbar/tabbar.vue";
import tabBarItem from "@/components/common/tabbar/tabbaritem.vue";
export default {
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
<style>
  
</style>