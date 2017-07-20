import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const pets = {
	state: {
		inputPlaceholder: 'License or Microchip Number...',
		isLoadingResults: false,
		hasSearched: false,
		searchTerm: null,
		searchResults: null,
		// searchResultsPage: 1,
	},
	actions: {
		searchPets ({state, commit}) {
			commit('setIsLoading', true)
			commit('setHasSearched', true)
			Vue.http.get(`${process.env.PET_API_ENDPOINT}/${state.searchTerm}`).then( response => {
				commit('setSearchResults', response.body)
				commit('setIsLoading', false)
			}).catch( err => {
				console.error(err)
				commit('setIsLoading', false)
			})
		}
	},
	mutations: {
		setIsLoading (state, data) {
			state.isLoadingResults = data
		},
		setHasSearched (state, data) {
			state.hasSearched = data
		},
		setSearchResults (state, data) {
			state.searchResults = data
		}
	}
}

export default new Vuex.Store({
	modules: {
		pets
	}
})
