import Vue from 'vue'
import Animal from '../models/animal'

export default {
	state: {
		inputPlaceholder: 'License or Microchip Number...',
		isLoadingResults: false,
		hasSearched: false,
		searchTerm: null,
		searchResults: []
		// searchResultsPage: 1,
	},
	actions: {
		searchPets ({state, commit}) {
			commit('setIsLoading', true)
			commit('setHasSearched', true)
			return Vue.http.get(`${process.env.PET_API_ENDPOINT}/${state.searchTerm}`).then( response => {
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
			state.searchResults = data.map(x => new Animal(x))
		}
	}
}
