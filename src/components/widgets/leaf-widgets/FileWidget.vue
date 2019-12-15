<template>
  <b-form-file accept="image/*"></b-form-file>
</template>

<script>
// import { createElement as h } from "@vue/composition-api";

export default {
  name: "FileWidget",
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
