<template>
  <div class="layoutContainer">
    <Header />
    <div class="content">
      <Silder />
      <Main />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Main from "./components/Main/index.vue";
import Silder from "./components/Silder/index.vue";
export default {
  name: "LayOut",
  components: { Header, Main, Silder },
};
</script>

<style scoped lang="scss">
  .layoutContainer{
    width: 100%;
    height: 100%;
    position: relative;
    .content{
      height: calc(100% - 50px);
      display: flex;
      flex-direction: row;
    }
  }
</style>
