<template>
	<b-container v-if="listItems">
		<b-row>
			<b-col col lg="2">
				<b-list-group>
					<b-list-group-item v-for="(item, index) in listItems" :key="index"
							v-show="item.title" :href="item.mappingPath" :active="activeIndex === index">
						{{ item.title }}
					</b-list-group-item>
				</b-list-group>
			</b-col>

			<b-col col lg="10">
				<div>
					<b-card class="text-left bg-light">
						<slot></slot>
					</b-card>
				</div>
			</b-col>

		</b-row>
	</b-container>
</template>

<script>
export default {
	setup() {
		// return { listItems, activeIndex }
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
