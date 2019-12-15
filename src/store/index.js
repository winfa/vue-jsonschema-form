import Vue from 'vue'
import Vuex from 'vuex'
import widget from './modules/widget/widget.module';

Vue.use(Vuex)

export default new Vuex.Store({
	modules: { widget },
	strict: process.env.NODE_ENV !== 'production',
})
