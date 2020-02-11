<template>
  <b-form-group :label="state.title" :description="state.mapping.description">
    <component
      v-bind:is="getViewWidgetName(state.mapping.viewType)"
      :mappingPath="state.mapping.mappingPath"
    ></component>
  </b-form-group>
</template>
<script>
import { reactive } from "@vue/composition-api";
import InputWidget from "./InputWidget";
import SelectWidget from "./SelectWidget";
import FileWidget from "./FileWidget";
import ColorWidget from "./ColorWidget";
import CheckboxWidget from "./CheckboxWidget";

export default {
  name: "BaseLeafWidget",
  setup(props, { root: { $store } }) {
    const mapping = $store.getters["widget/getMappingByPath"](
      props.mappingPath
    );

    const state = reactive({
      mapping,
      title: mapping.required ? mapping.title + " *" : mapping.title,
      description: mapping.description
    });

    const getViewWidgetName = viewType => {
      if (viewType === "color") return "ColorWidget";

      if (viewType === "dropdownList") return "SelectWidget";

      if (viewType === "image-upload") return "FileWidget";

      if (viewType === "checkbox") return "CheckboxWidget";

      return "InputWidget";
    };

    return {
      state,
      getViewWidgetName
    };
  },

  props: {
    mappingPath: {
      type: String
    }
  },

  components: {
    InputWidget,
    SelectWidget,
    FileWidget,
    ColorWidget,
    CheckboxWidget
  }
};
</script>

<style scoped>
</style>
