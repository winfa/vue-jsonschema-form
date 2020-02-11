<script>
import { createElement as h } from "@vue/composition-api";
import ListWidget from "./ListWidget.vue";

export default {
  name: "BaseArrayWidget",
  setup(props, { root: { $store } }) {
    const mapping = $store.getters["widget/getMappingByPath"](
      props.mappingPath
    );

    $store.commit("widget/initSource", {
      path: mapping.sourcePath,
      defaultValue: {}
    });
    const source = $store.getters["widget/getSource"](props.mappingPath);
    console.log(source);

    const listItems = [
      {
        title: "test array item",
        mappingPath: mapping.mappingPath
      }
    ];
    const activeIndex = 0;

    return () =>
      h("ListWidget", {
        props: {
          listItems,
          activeIndex
        }
      });
  },

  props: {
    mappingPath: {
      type: String
    }
  },

  components: { ListWidget }
};
</script>

<style scoped>
</style>
