<script>
import { createElement as h } from '@vue/composition-api'
import BaseObjectWidget from './BaseObjectWidget.vue'
import BaseArrayWidget from './BaseArrayWidget.vue'
import BaseLeafWidget from '../leaf-widgets/BaseLeafWidget'

export default {
	setup(props) {
		if (props.sourceType === 'object') return ()=> h('BaseObjectWidget', { props })

		if (props.sourceType === 'array') return ()=> h('BaseArrayWidget', { props })

		return ()=> h('BaseLeafWidget', { props })
	},

	props: {
		sourceType: {
			type: String
		},
		mappingPath: {
			type: String
		}
	},

	components: { BaseObjectWidget, BaseArrayWidget, BaseLeafWidget }
}

</script>

<style scoped>

</style>
