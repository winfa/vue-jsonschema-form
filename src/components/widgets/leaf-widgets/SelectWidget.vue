<template>
  <b-form-select :options="[]"></b-form-select>
</template>

<script>
// import { createElement as h } from "@vue/composition-api";

export default {
  name: "SelectWidget",
  setup() {

  },

  props: {
    mappingPath: {
      type: String
    }
  },
};
</script>

<style scoped>
</style>
