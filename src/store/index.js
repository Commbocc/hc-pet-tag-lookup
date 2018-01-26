import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import pets from './modules/pets'

export default new Vuex.Store({
	modules: {
		pets
	}
})
