<template>
  <b-input-group>
    <template v-slot:prepend>
      <b-input-group-text><Verte picker="square" model="hex" v-model="color">
        <b-icon icon="square-fill"></b-icon>
      </Verte></b-input-group-text >
    </template>

    <b-form-input v-model="color"></b-form-input>
  </b-input-group>

</template>

<script>
// import { createElement as h } from "@vue/composition-api";
import { ref } from "@vue/composition-api";

import Verte from 'verte';
export default {
  name: "ColorWidget",
  setup() {
    const color = ref('#000000')
    return { color }
  },

  props: {
    mappingPath: {
      type: String
    }
  },

  components: { Verte }
};
</script>

<style scoped>
</style>
