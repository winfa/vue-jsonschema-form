<template>
  <div v-if="mappingPath !== null">
    <BaseObjectWidget :mappingPath="mappingPath"></BaseObjectWidget>
    {{ source }}
  </div>
</template>
<script>
import BaseObjectWidget from "../components/widgets/container-widgets/BaseObjectWidget";

export default {
  name: "Configuration",

  props: {
    msg: String
  },

  components: {
    BaseObjectWidget
  },

  beforeCreate: function() {
    if (this.$store.state?.widget?.mapping?.fields) return;

    this.$store.dispatch("widget/initStore");
  },

  computed: {
    mapping() {
      return this.$store.state.widget.mapping;
    },

    source() {
      return this.$store.state.widget.source;
    },

    mappingPath() {
      if (this.mapping && this.mapping.fields) {
        return ''
      }

      return null
    }
  },

  methods: {}
};
</script>

<style scoped>
</style>
