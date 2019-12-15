<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { provide } from '@vue/composition-api'

export default {
  name: 'app',
  components: {
  },

  setup(props, { root: { $store } }) {
    provide('store', $store)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
