

<script>
import { createElement as h } from "@vue/composition-api";
import ListGroupWidget from "./ListGroupWidget.vue";
import TabWidget from "./TabWidget.vue";

import BaseWidget from "./BaseWidget.vue";
import BaseLeafWidget from "../leaf-widgets/BaseLeafWidget.vue";
import BaseArrayWidget from "./BaseArrayWidget.vue";

export default {
	name: 'BaseObjectWidget',

  setup(props, { root: { $route, $store } }) {
		const mapping = $store.getters['widget/getMappingByPath'](props.mappingPath)
		const getBaseWidgetName = $store.getters['widget/getBaseWidgetName']

    if (mapping.viewType === "object")
      return () =>
        h(
          "div",
          {
            props: {
              mappingPath: mapping.mappingPath
            }
          },
          mapping.fields.map(({ sourceType, mappingPath }) =>
            h(getBaseWidgetName(sourceType), { props: { mappingPath } })
          )
        );

    const getActiveIndex = (currentPath, fullPath) => {
      if (!fullPath.includes(currentPath)) return 0;

      return Number.parseInt(
        fullPath.replace(currentPath, "").match(/(?<=^\.?fields\[)\d+/)?.[0]
      );
    };

    const activeIndex = getActiveIndex(
      mapping.mappingPath,
      $route.params.id
    );
    const listItems = mapping.fields.map(subMapping => {
      return {
        title: subMapping.title,
        mappingPath: subMapping.mappingPath
      };
    });

    const getViewWidgetName = (viewType) => {
      if (viewType === 'tab' || viewType === 'tab-set') return 'TabWidget'

      return 'ListGroupWidget'
    }

    const selectedMapping = mapping.fields?.[activeIndex];
    return () =>
      h(
        getViewWidgetName(mapping.viewType),
        {
          props: {
            listItems,
            activeIndex
          }
        },
        [
          h(getBaseWidgetName(selectedMapping.sourceType), {
            props: {
              mappingPath: selectedMapping.mappingPath
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

  components: { ListGroupWidget, TabWidget, BaseWidget, BaseLeafWidget, BaseArrayWidget }
};
</script>

<style scoped>
</style>
