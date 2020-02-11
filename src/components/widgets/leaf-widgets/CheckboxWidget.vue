<template>
  <b-form-checkbox v-model="checked" name="check-button" switch>
  </b-form-checkbox>
</template>

<script>
// import { createElement as h } from "@vue/composition-api";
// import { ref } from "@vue/composition-api";

export default {
  name: "CheckboxWidget",
  setup() {
  },

  props: {
    mappingPath: {
      type: String
    }
  },

  components: { }
};
</script>

<style scoped>
</style>
