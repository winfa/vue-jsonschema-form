<script>
import { createElement as h } from "@vue/composition-api";
import InputWidget from "./InputWidget";
import SelectWidget from "./SelectWidget";
import FileWidget from "./FileWidget";
import ColorWidget from "./ColorWidget";

export default {
  name: "BaseLeafWidget",
  setup(props, { root: { $store } }) {
    const mapping = $store.getters["widget/getMappingByPath"](
      props.mappingPath
    );

    const getWidgetName = viewType => {
      if (viewType === "text") return "InputWidget";

      if (viewType === "color") return "ColorWidget";

      if (viewType === "dropdownList") return "SelectWidget";

      if (viewType === "image-upload") return "FileWidget";
    };

    return () =>
      h(
        "b-form-group",
        {
          props: {
            label: mapping.required ? mapping.title + " *" : mapping.title,
            description: mapping.description
          }
        },
        [
          h(getWidgetName(mapping.viewType),
          {
            props: {
              mappingPath: mapping.mappingPath,
            }
          })
        ]
      );
  },

  props: {
    mappingPath: {
      type: String
    }
  },

  components: { InputWidget, SelectWidget, FileWidget, ColorWidget }
};
</script>

<style scoped>
</style>
