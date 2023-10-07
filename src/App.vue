<template>
  <div id ="app">
    <HomeE/>
  </div>
</template>

<script>
import HomeE from './components/HomeE.vue';

export default {
  name: 'App',
  components: {
    HomeE
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
