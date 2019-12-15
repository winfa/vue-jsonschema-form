<template>
	<b-tabs content-class="mt-3" justified>
		<b-tab v-for="(item, index) in listItems" :key="index"
				:title="item.title" :active="activeIndex === index">
				<slot></slot>
		</b-tab>
	</b-tabs>
</template>

<script>
export default {
	name: 'TabWidget',
	setup() {
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
