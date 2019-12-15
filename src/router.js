import Configuration from './components/Configuration.vue'
import VueRouter from 'vue-router'

const router = new VueRouter({
	mode: 'history',
  routes: [
    {
			path: '/widget-form/:id', name: 'widgetForm', component: Configuration
		}
  ]
})

export default router;
