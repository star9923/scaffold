<template>
  <div class="mainContainer">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Main',
  }
</script>

<style scoped lang="scss">
  .mainContainer{
    width: 100%;
    padding: 10px;
    background-color: #999;
    .content{
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
</style>
