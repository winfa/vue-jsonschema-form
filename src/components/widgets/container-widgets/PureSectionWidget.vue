<template>
	<div>
		<component v-for="(item, index) in mapping.fields" v-bind:key="index"
				v-bind:is="getBaseWidgetName(item.viewType)" :mappingPath="item.mappingPath">
		</component>
		hello
	</div>
</template>

<script>
import BaseWidget from "./BaseWidget.vue";
import BaseLeafWidget from "../leaf-widgets/BaseLeafWidget.vue";
import BaseArrayWidget from "./BaseArrayWidget.vue";
import BaseObjectWidget from "./BaseObjectWidget.vue";

export default {
	name: 'PureSectionWidget',

	setup(props, { root: { $store } }) {
		const mapping = $store.getters['widget/getMappingByPath'](props.mappingPath)
		const getBaseWidgetName = $store.getters["widget/getBaseWidgetName"];

		return {
			mapping, getBaseWidgetName
		}
	},

	props: {
    mappingPath: {
      type: String
    }
  },

	components: { BaseArrayWidget, BaseWidget, BaseLeafWidget, BaseObjectWidget }
}


</script>

<style scoped>

</style>
