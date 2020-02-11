<template>
	<b-tabs content-class="mt-3" justified @input="onActiveEvent">
		<b-tab v-for="(item, index) in listItems" :key="index"
				:title="item.title" :active="activeIndex === index">
				<slot></slot>
		</b-tab>
	</b-tabs>
</template>

<script>
export default {
	name: 'TabWidget',
	setup(props, { root: { $router } }) {
		return {
			onActiveEvent(tabIndex) {
				if (props.activeIndex !== tabIndex) {
					$router.push({ params: { id: props.listItems[tabIndex].mappingPath } })
				}
			}
		}
	},

	props: {
		listItems: {
			type: Array,
		},
		activeIndex: {
			type: Number,
		}
	}
}

</script>

<style scoped>

</style>
