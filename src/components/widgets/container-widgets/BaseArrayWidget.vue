<template>
  <div>
    <ListWidget v-if="Object.is(activeIndex, NaN)" :listItems="listItems"></ListWidget>

    <div v-if="!Object.is(activeIndex, NaN)">

      <b-button variant="outline-info" size="sm" class="mb-3" @click="goBackToList">
        <b-icon icon="forward-fill" font-scale=1 flip-h=true></b-icon> Back
      </b-button>

      <component v-for="(subMapping, index) in mapping.fields" v-bind:key="index"
        v-bind:is="getBaseWidgetName(subMapping.sourceType)" :mappingPath="subMapping.mappingPath"
      >
      </component>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/composition-api";
import ListWidget from "./ListWidget.vue";
import BaseLeafWidget from "../leaf-widgets/BaseLeafWidget.vue";
import BaseObjectWidget from "./BaseObjectWidget.vue";

export default {
  name: "BaseArrayWidget",
  setup(props, { root: { $store, $route, $router } }) {
    const mapping = $store.getters["widget/getMappingByPath"](
      props.mappingPath
    );

    $store.commit("widget/initSource", {
      path: mapping.sourcePath,
      defaultValue: {}
    });
    // const source = $store.getters["widget/getSource"](props.mappingPath);

    const getBaseWidgetName = $store.getters["widget/getBaseWidgetName"];

    const getActiveIndex = (currentPath, fullPath) => {
      if (!fullPath.includes(currentPath)) return NaN;

      return (
        Number.parseInt(
          fullPath.replace(currentPath, "").match(/(?<=^\{)\d+/)?.[0]
        )
      );
    };


    const activeIndex = ref(getActiveIndex(mapping.mappingPath, $route.params.id))
    const state = reactive({
      mapping,

      listItems: [
        {
          title: "test array item",
          mappingPath: mapping.mappingPath
        }
      ],
    });

    const goBackToList = () => {
      const path = $route.params.id.replace(/(\{\d*\})?$/, '')
      $router.push({ params: { id:  path} })
    }

    return {
      ...state,
      activeIndex,
      getActiveIndex,
      goBackToList,
      getBaseWidgetName
    };
  },

  props: {
    mappingPath: {
      type: String
    }
  },

  watch: {
    $route(to) {
      this.activeIndex = this.getActiveIndex(this.mapping.mappingPath, to.params.id)
    }
  },

  components: { ListWidget, BaseLeafWidget, BaseObjectWidget }
};
</script>

<style scoped>
</style>
