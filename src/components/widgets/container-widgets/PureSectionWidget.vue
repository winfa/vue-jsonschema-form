

// <script>
// import { reactive, createElement as h } from '@vue/composition-api'
// import BaseArrayWidget from './BaseArrayWidget.vue'

// export default {
// 	setup(props, { root: { $route, $store } }) {
// 		const mapping = $store.getters['widget/getMappingByPath'](props.mappingPath)

// 		return () => h('div', {}, mapping.fields.map(subMaping => {
// 			if (subMapping.sourceType === 'array') {
// 				return h('BaseArrayWidget', { props: {
// 					mappingPath: subMapping.mappingPath
// 				} });
// 			}

// 			return h('b-form-group', {
// 				props: {
// 					'label': subMapping.title + '.......' + JSON.stringify(subMapping)
// 				}
// 			},[
// 				h('b-form-input')
// 			])
// 		}))
// 	},

// 	components: { }
// }

// </script>

// <style scoped>

// </style>
