<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .tabBar{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f6f6f6;
    height: 49px;
    text-align: center;
  }
</style>