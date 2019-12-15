<template>
  <div>
    <BaseObjectWidget mappingPath=""></BaseObjectWidget>
  </div>
</template>

<script>
import BaseObjectWidget from '../components/widgets/container-widgets/BaseObjectWidget'
import * as preferenceApi from '../api'
import store from '../store'

export default {
  name: 'Configuration',

  props: {
    msg: String
  },

  components: {
    BaseObjectWidget
  },

  beforeRouteEnter (to, from, next) {
    Promise.all([
      preferenceApi.getMapping(),
      preferenceApi.getSchema(),
      preferenceApi.getSystemData()
    ])
    .then(([mapping, schema, systemData]) => {
      store.commit('widget/setPreferences', { mapping, schema, systemData });
      next()
    })
  },

  computed: {
    mapping() {
      return this.$store.state.widget.mapping;
    }
  },

  methods: {

  }
}
</script>

<style scoped>

</style>
