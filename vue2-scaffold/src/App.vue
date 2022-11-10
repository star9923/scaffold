<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from './components/Layout/index.vue';
export default {
  name: 'App',
  components: {
    Layout
}
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
