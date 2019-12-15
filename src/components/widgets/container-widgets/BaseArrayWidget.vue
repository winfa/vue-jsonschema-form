<script>
import { createElement as h } from '@vue/composition-api'
import ListWidget from './ListWidget.vue'

export default {
	setup(props, { root: { $store } }) {
		const mapping = $store.getters['widget/getMappingByPath'](props.mappingPath)
		const listItems = [{
			title: 'test array item',
			mappingPath: mapping.mappingPath
		}]
		const activeIndex = 0

		return () => h('ListWidget', {
			props: {
				listItems,
				activeIndex,
			}
		})
	},

	props: {
		mappingPath: {
			type: String
		}
	},

	components: { ListWidget }
}

</script>

<style scoped>

</style>
