<template>
   <b-form-input :type="inputType"></b-form-input>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "InputWidget",
  setup(props, { root: { $store }, attrs }) {
    console.log(attrs, props, $store)
    const mapping = $store.getters["widget/getMappingByPath"](
      props.mappingPath
    );

    const inputType = computed(() => {
      if (mapping.viewType === 'color') return 'color'

      return 'text'
    })

    return { inputType }
  },

  props: {
		mappingPath: String,
    viewType: String
	},
};
</script>

<style scoped>
</style>
