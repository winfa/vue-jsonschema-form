<template>
  <div>
    {{ state.activeIndex }}
    <div v-if="state.isTransparentObject">
      <component
        v-for="(item, index) in state.mapping.fields"
        v-bind:key="index"
        v-bind:is="getBaseWidgetName(item.sourceType)"
        :mappingPath="item.mappingPath"
      ></component>
    </div>

    <div v-if="!state.isTransparentObject">
      <component
        v-bind:is="getViewWidgetName(state.mapping.viewType)"
        :listItems="state.listItems"
        :activeIndex="activeIndex"
      >
        <component v-if="selectedChild"
          v-bind:is="getBaseWidgetName(selectedChild.sourceType)"
          :mappingPath="selectedChild.mappingPath"
        ></component>
      </component>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
import ListGroupWidget from "./ListGroupWidget.vue";
import TabWidget from "./TabWidget.vue";

import BaseLeafWidget from "../leaf-widgets/BaseLeafWidget.vue";
import BaseArrayWidget from "./BaseArrayWidget.vue";

export default {
  name: "BaseObjectWidget",

  setup(props, { root: { $store, $route } }) {
    const mapping = $store.getters["widget/getMappingByPath"](
      props.mappingPath
    );

		$store.commit('widget/initSource', { path: mapping.sourcePath || '', defaultValue: {}})
		const source = $store.getters['widget/getSource'](props.mappingPath)
		console.log(source)

    const getActiveIndex = (currentPath, fullPath) => {
      if (!fullPath.includes(currentPath)) return NaN;

      return (
        Number.parseInt(
          fullPath.replace(currentPath, "").match(/(?<=^\.?fields\[)\d+/)?.[0]
        )
      );
    };

    const activeIndex = ref(getActiveIndex(mapping.mappingPath, $route.params.id))
    const selectedChild = ref(mapping.fields[activeIndex.value])

    const getListItems = mapping => mapping.fields.map(subMapping => ({
      title: subMapping.title,
      mappingPath: subMapping.mappingPath
    }));

    const getViewWidgetName = viewType => {
      if (viewType === "tab" || viewType === "tab-set") return "TabWidget";
      return "ListGroupWidget";
    }

    const getBaseWidgetName = $store.getters["widget/getBaseWidgetName"];

    const isTransparentObject = () => {
      return  mapping.viewType === "object" || mapping.viewType === "tab-item"
    }

    const state = reactive({
      mapping,
      isTransparentObject: isTransparentObject(),
      listItems: getListItems(mapping),
    });

    // watch(() => {
    //   if(Object.is(activeIndex.value, NaN)) {
    //     $router.push({ params: { id: mapping.fields[0].mappingPath }})
    //   }
    // })

    return {
      state,
      activeIndex,
      getActiveIndex,
      selectedChild,
      getViewWidgetName,
      getBaseWidgetName
    };
  },

  watch: {
    $route(to, from) {
      this.activeIndex = this.getActiveIndex(this.state.mapping.mappingPath, to.params.id)

      console.log(this.activeIndex, to, from, '.......')
    }
  },

  props: {
    mappingPath: String
  },

  components: {
    ListGroupWidget,
    TabWidget,
    BaseLeafWidget,
    BaseArrayWidget
  }
};
</script>

<style scoped>
</style>
